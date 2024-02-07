import { useState, useEffect } from "react";
import Filter from "../components/Filter";
import PersonForm from "../components/PersonForm";
import PersonsList from "../components/PersonsList";
import PhoneBook from "../services/phonebook";
import Notification from "../components/Notification";

const App = () => {
  //State variables
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const [message, setMessage] = useState(null);
  const [colorNotification, setColorNotification] = useState('');

  // Effect after component has been mounted after getting phonebook data from db.json
  useEffect(() => {
    PhoneBook.getListOfContacts()
      .then(({data}) => {
        setPersons(data);
        setFilteredList(data);
      })
  }, []);

  //Non-handling functions
  const isTheNameExists = persons.find(({ name }) => name === newName);

  //Handling functions
  const addNewContact = (e) => {
    e.preventDefault();
    console.log(isTheNameExists);
    if (isTheNameExists !== undefined) {
      const confirmResponse = confirm(
        `${newName} is already added to phonebook, replace the old number with a new one?`
      );

      const objUpdated = { ...isTheNameExists, number: newPhone };
      console.log(objUpdated);

      if (confirmResponse) updateContact(objUpdated);
      return;
    }

    const newContact = {
      name: newName,
      number: newPhone,
    };

    PhoneBook.addNewContact(newContact)
      .then(({data}) => {
        console.log(data);
        setMessage(`${data.name} was added to the server`)
        setTimeout(() => {
          setMessage(null);
        }, 3000);
        setPersons([...persons, data]);
        setFilteredList([...persons, data]);
        setNewName("");
        setNewPhone("");
    });
  };

  const updateContact = (objToUpdate) => {
    PhoneBook.updateContact(objToUpdate)
      .then(({ data }) => {
        const personsList = [...persons].map((person) => {
          if (person.id === data.id) return data;
          return person;
        });
        console.log(personsList);
        setMessage(`${data.name}'s phone was updated.`)
        setTimeout(() => {
          setMessage(null);
        }, 3000);
        setPersons(personsList);
        setFilteredList(personsList);
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
      <Notification message={message} colorStyle={colorNotification}/>
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
