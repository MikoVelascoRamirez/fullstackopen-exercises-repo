import { useState } from 'react'
import Filter from '../components/Filter'
import PersonForm from '../components/PersonForm'
import PersonsList from '../components/PersonsList'
import axios from 'axios';

const App = () => {

  //State variables
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filteredList, setFilteredList] = useState(persons);

  //Non-handling functions
  const isTheNameExists = persons.some(({name}) => name === newName);

  //Handling functions
  const addNewContact = e => {
    e.preventDefault();
    if(isTheNameExists) return alert(`${newName} is already added to phonebook`);
    const newContact = {name: newName, number: newPhone, id: persons.length+1};
    setPersons([...persons, newContact])
    setFilteredList([...persons, newContact])
    setNewName('')
    setNewPhone('')
  }

  const filterPhoneBook = (searchTerm) => persons.filter(
    person => !person.name.search(new RegExp(`^(${searchTerm})`, "i"))
  )

  const handleNewNameChange = e => setNewName(e.target.value)
  const handleNewPhoneChange = e => setNewPhone(e.target.value)
  const handleFilterSearchChange = e => {
    // console.log(e.target.value)
    // console.log(filterPhoneBook(e.target.value))
    setFilteredList(filterPhoneBook(e.target.value));
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter ev={handleFilterSearchChange}/>
          
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
        filteredList={filteredList}
        filteredListLength={filteredList.length}
      />

      <div>debug name: {newName}</div>
      <div>debug number: {newPhone}</div>      
    </div>
  )
}

export default App
