import { useState } from 'react'

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
      <div>
        Filter shown with <input type="text" onChange={handleFilterSearchChange}/>
      </div>
      <form action="">
        <div>
          <h2>Add a new number</h2>
          name
          <input 
            type="text" 
            value={newName} 
            onChange={handleNewNameChange}
          />
          <br/>
          number
          <input 
            type="text" 
            value={newPhone}
            onChange={handleNewPhoneChange}
            />
        </div>
        <div>
          <button type="submit" onClick={addNewContact}>add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <ul>
        { persons.map(({name, number}) => <li key={name}>{name} {number}</li>) }
      </ul>
      <div>debug: {newName}</div>
    </div>
  )
}

export default App
