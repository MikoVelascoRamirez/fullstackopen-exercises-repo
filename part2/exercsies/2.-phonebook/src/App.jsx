import { useState } from 'react'

const App = () => {

  //State variables
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

  //Non-handling functions
  const isTheNameExists = persons.some(({name}) => name === newName);

  //Handling functions
  const addNewContact = e => {
    e.preventDefault();
    if(isTheNameExists) return alert(`${newName} is already added to phonebook`);
    setPersons(persons.concat({name: newName, number: newPhone}))
    setNewName('')
    setNewPhone('')
  }

  const handleNewNameChange = e => setNewName(e.target.value)
  const handleNewPhoneChange = e => setNewPhone(e.target.value)

  return (
    <div>
      <h2>Phonebook</h2>
      <form action="">
        <div>
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
