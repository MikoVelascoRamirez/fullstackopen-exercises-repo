import { useEffect, useState } from "react";
import countriesService from "../services/countriesService";
import Form from "../components/Form";
import ContainerInfo from "../components/ContainerInfo";

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
      <ContainerInfo 
        country={onlyCountry}
        resultList={resultSearchList}
        getCountry={fetchCountry}
      />
    </div>
  );
};

export default App;
