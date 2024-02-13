import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [country, setCountry] = useState("");
  const [listOfCountries, setListOfCountries] = useState(null);

  // State handling functions
  const handleNameCountry = (e) => {
    setCountry(e.target.value);
  };

  return (
    <div>
      <section>
        <label htmlFor="inp_country">Find countries </label>
        <input type="text" id="inp_country" onChange={handleNameCountry} />
      </section>      
      <section>
        <p>Too many matches, specify another filter</p>
      </section>
    </div>
  );
};

export default App;
