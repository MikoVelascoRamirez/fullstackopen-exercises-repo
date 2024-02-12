import { useState } from 'react'

const App = () => {

  const [country, setCountry] = useState("");
  const [result, setResult] = useState(null);

  return (
    <div>
      <form>
        <label htmlFor="inp_country">Find countries </label>
        <input type="text" id="inp_country" />
      </form>
      <section>
        <p>Too many matches, specify another filter</p>
      </section>
    </div>
  )
}

export default App
