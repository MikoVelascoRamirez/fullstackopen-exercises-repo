import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [country, setCountry] = useState("");
  const [listOfCountries, setListOfCountries] = useState(null);
  const [onlyCountry, setOnlyCountry] = useState(null);

  useEffect(() => {
    console.log("effect")
    if(!listOfCountries){
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((result) => {
        const list = result.data.map(({ name, area, cca2 }) => {
          return {"name": name.common, "key_id": `${cca2.toLowerCase()}_${area}`}
        });
        setListOfCountries(list);
      });
    }
    else if(resultSearchList.length !== 1) {
      console.log("seteando onlyCountry")
      setOnlyCountry(null);
    }
  }, [country]);

  if (!listOfCountries) return null;

  // Not-handling functions
  let resultSearchList = listOfCountries.filter(
    (countryName) => !countryName.name.search(new RegExp(`.*${country}.*`, "gi"))
  );

  // State handling functions
  const handleNameCountry = (e) => {
    console.log("handleNameCountry()")
    setCountry(e.target.value);
  };

  return (
    <div>
      <section>
        <label htmlFor="inp_country">Find countries </label>
        <input type="text" id="inp_country" onChange={handleNameCountry} value={country}/>
      </section>
      <section>
        <p>Too many matches, specify another filter</p>
      </section>
    </div>
  );
};

export default App;
