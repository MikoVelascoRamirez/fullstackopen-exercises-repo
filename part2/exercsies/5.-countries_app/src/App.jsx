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

  const getSearchResults = resultSearch => {
    console.log(resultSearch)
    const resultLength = resultSearch.length;
    let resultToPaint = "";
    
    if(resultLength === 1){
      fetchCountry(resultSearch[0])
    } else if(resultSearch.length > 1 && resultSearch.length < 10) {
        resultToPaint = resultSearch;        
    } else if(resultSearch.length >= 10 && resultSearch.length < 250)
        resultToPaint = "Too many matches, specify another filter";        
      else if (!resultSearch.length)
        resultToPaint = "There are NO matches";
      else
        resultToPaint = "Please, input a term search";
    
    return paintResults(resultToPaint);
  };

  const paintResults = result => {
    console.log("paintResults()", typeof result)
    if(typeof result === 'string') return <p>{result}</p>
    else if (Array.isArray(result))
      return <ul>{result.map(({name, key_id}) => <li key={key_id}>{name}</li>)}</ul>
    else if(result instanceof Object){
      return <div>
                <h2>{onlyCountry.name}</h2>
                <p>Capital: {onlyCountry.capital[0]}</p>
                <p>Area: {onlyCountry.area}</p>
                <h3>Languages:</h3>
                <ul>
                  {
                    Object.entries( onlyCountry.languages )
                    .map( lang => <li key={lang[0]}>{lang[1]}</li> )
                  }
                </ul>
                <img alt={onlyCountry.flags.alt} src={onlyCountry.flags.png}/>
              </div>
    }
  }

  // State handling functions
  const handleNameCountry = (e) => {
    console.log("handleNameCountry()")
    setCountry(e.target.value);
  };

  const fetchCountry = ({name}) => {
    console.log("fetchCountry()")
    console.log("onlyCountry", onlyCountry)
    axios.get(`https://studies.cs.helsinki.fi/restcountries/api/name/${name}`)
      .then(response => {        
        const { capital, area, languages, flags } = response.data;
        setOnlyCountry({ name, capital, area, languages, flags })
      })
  }

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
