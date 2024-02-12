import { useState } from 'react'

const App = () => {

  const [country, setCountry] = useState("");
  const [listOfCountries, setListOfCountries] = useState(null);

  // Styate handling functions
  const handleNameCountry = e => {
    setCountry(e.target.value)
  }

  return (
    <div>
      <section>
        <label htmlFor="inp_country">Find countries </label>
        <input type="text" id="inp_country" onChange={handleNameCountry}/>
      </section>
      <section>
        <p>Too many matches, specify another filter</p>
      </section>
    </div>
  )
}

export default App
