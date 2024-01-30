import { useState } from 'react'

const App = () => {

  //State variables
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  //Non-handling functions
  const isTheNameExists = persons.some(({name}) => name === newName);
  
  //Handling functions
  const addNumber = e => {
    e.preventDefault();
    if(isTheNameExists) return alert(`${newName} is already added to phonebook`);
    setPersons(persons.concat({name: newName}))
    setNewName('')
  }

  const handleNewNameChange = e => setNewName(e.target.value)

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
        </div>
        <div>
          <button type="submit" onClick={addNumber}>add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <ul>
        { persons.map(({name}) => <li key={name}>{name}</li>) }
      </ul>
      <div>debug: {newName}</div>
    </div>
  )
}

export default App
