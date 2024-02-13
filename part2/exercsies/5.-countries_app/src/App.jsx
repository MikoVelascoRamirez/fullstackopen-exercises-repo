import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [country, setCountry] = useState("");
  const [listOfCountries, setListOfCountries] = useState(null);

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((result) => {
        const list = result.data.map(({ name, area }) => {
          return {"name": name.common, area}
        });
        setListOfCountries(list);
      });
  }, []);

  if (!listOfCountries) return null;

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
