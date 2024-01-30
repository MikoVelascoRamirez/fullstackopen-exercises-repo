import { useState } from 'react'

const App = () => {

  //State variables
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  //Handling functions
  const addNumber = e => {
    e.preventDefault();
    setPersons(persons.concat({name: newName}))
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form action="">
        <div>
          name
          <input 
            type="text" 
            value={newName} 
            onChange={e => setNewName(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" onClick={addNumber}>add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <div>debug: {newName}</div>
    </div>
  )
}

export default App
