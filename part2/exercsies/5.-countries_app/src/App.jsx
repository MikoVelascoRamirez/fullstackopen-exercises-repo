import { useEffect, useState } from "react";
import countriesService from "../services/countriesService";
import Form from "../components/Form";
import ContainerInfo from "../components/ContainerInfo";
import Message from "../components/Message";

const App = () => {
  const [country, setCountry] = useState("");
  const [listOfCountries, setListOfCountries] = useState(null);
  const [onlyCountry, setOnlyCountry] = useState(null);
  const [displayMessage, setDisplayMessage] = useState("Fetching countries...");

  useEffect(() => {
    if(!listOfCountries){
      countriesService
        .getAllCountries()
          .then((list) => {
            setListOfCountries(list)
            setDisplayMessage("")
          })
          .catch(() => {
            setDisplayMessage("Error fetching countries!!!")          
          })
    }
    else if(resultSearchList.length !== 1) setOnlyCountry(null);
  }, [country]);

  if (!listOfCountries) return <Message msg={displayMessage}/>;

  // Not-handling functions
  let resultSearchList = listOfCountries.filter(
    (countryName) => !countryName.name.search(new RegExp(`.*${country}.*`, "gi"))
  );

  // State handling functions
  const handleNameCountry = (e) => setCountry(e.target.value);

  const fetchCountry = ({name}) => {
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
