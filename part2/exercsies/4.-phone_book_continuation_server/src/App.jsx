import { useState, useEffect } from "react";
import Filter from "../components/Filter";
import PersonForm from "../components/PersonForm";
import PersonsList from "../components/PersonsList";
import PhoneBook from "../services/phonebook";

const App = () => {
  //State variables
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  // Effect after component has been mounted after getting phonebook data from db.json
  useEffect(() => {
    PhoneBook.getListOfContacts()
      .then(({data}) => {
        console.log(data)
        setPersons(data);
        setFilteredList(data);
      })
  }, []);

  //Non-handling functions
  const isTheNameExists = persons.some(({ name }) => name === newName);

  //Handling functions
  const addNewContact = (e) => {
    e.preventDefault();
    if (isTheNameExists)
      return alert(`${newName} is already added to phonebook`);

    const newContact = {
      name: newName,
      number: newPhone,
    };

    PhoneBook.addNewContact(newContact)
      .then(({data}) => {
        console.log(data);
        setPersons([...persons, data]);
        setFilteredList([...persons, data]);
        setNewName("");
        setNewPhone("");
    });
  };

  const deleteContact = (id) => {
    const msgToDelete = window.confirm("Are you sure want to delete this contact?");
    // console.log("aaaaaa", id)
    // console.log("response of confirm", msgToDelete)
    if(msgToDelete) {
      PhoneBook.deleteContact(id)
        .then(response => {
          if(response.statusText === 'OK'){
            const personsList = [...persons].filter((person) => person.id !== id);
            // console.log(persons, personsList)
            setPersons(personsList)
            setFilteredList(personsList)
          }
        })
    }
  }

  const filterPhoneBook = (searchTerm) =>
    persons.filter(
      (person) => !person.name.search(new RegExp(`^(${searchTerm})`, "i"))
    );

  const handleNewNameChange = (e) => setNewName(e.target.value);
  const handleNewPhoneChange = (e) => setNewPhone(e.target.value);
  const handleFilterSearchChange = (e) => {
    // console.log(e.target.value)
    // console.log(filterPhoneBook(e.target.value))
    setFilteredList(filterPhoneBook(e.target.value));
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter ev={handleFilterSearchChange} />

      <h3>Add a new number</h3>
      <PersonForm
        evName={handleNewNameChange}
        evNumber={handleNewPhoneChange}
        addContact={addNewContact}
        nameVal={newName}
        numVal={newPhone}
      />

      <h2>Numbers</h2>
      <PersonsList
        personsLength={persons.length}
        deleteContact={deleteContact}
        filteredList={filteredList}
        filteredListLength={filteredList.length}
      />

      <div>debug name: {newName}</div>
      <div>debug number: {newPhone}</div>
    </div>
  );
};

export default App;
