import { useEffect, useState } from "react";
import countriesService from "../services/countriesService";
import Form from "../components/Form";

const App = () => {
  const [country, setCountry] = useState("");
  const [listOfCountries, setListOfCountries] = useState(null);
  const [onlyCountry, setOnlyCountry] = useState(null);

  useEffect(() => {
    console.log("effect")
    if(!listOfCountries){
      countriesService
        .getAllCountries()
          .then((list) => setListOfCountries(list))
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
      return <ul>
              {
                result.map(({name, key_id}) => {
                  return (
                    <li key={key_id}>
                      {name} <button onClick={() => fetchCountry({name})}>show</button>
                    </li>
                  )
                })
              }
            </ul>
    else if(result instanceof Object){
      return <div>
                <h2>{onlyCountry.name}</h2>
                <p>Capital: {onlyCountry.capital}</p>
                <p>Area: {onlyCountry.area}</p>
                <h3>Languages:</h3>
                <ul>
                  {
                    Object.entries( onlyCountry.languages )
                    .map( lang => <li key={lang[0]}>{lang[1]}</li> )
                  }
                </ul>
                <img alt={onlyCountry.flags.alt} src={onlyCountry.flags.png}/>

                <h3>Weather in {onlyCountry.capital}</h3>
                <p>Temperature: {onlyCountry.temperature} Celsius</p>
                <img
                  src={`https://openweathermap.org/img/wn/${onlyCountry.iconImage}@2x.png`}
                  alt="weather"
                />
                <p>Wind speed: {onlyCountry.wind} m/s</p>
              </div>
    }
  }

  // State handling functions
  const handleNameCountry = (e) => {
    console.log("handleNameCountry()")
    setCountry(e.target.value);
  };

  const fetchCountry = ({name}) => {
    console.log(name)
    console.log("fetchCountry()")
    console.log("onlyCountry", onlyCountry)
    
    countriesService
      .getCountry(name)
        .then(result => setOnlyCountry(result))
  }

  return (
    <div>

      <Form handlerName={handleNameCountry} country={country}/>
      
      <section>
        { 
          !onlyCountry
            ? getSearchResults(resultSearchList)
            : paintResults(onlyCountry)
        }
      </section>
    </div>
  );
};

export default App;
