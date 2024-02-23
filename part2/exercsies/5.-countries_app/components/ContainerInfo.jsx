import React from "react";
import Result from "./Result";

const ContainerInfo = ({ country, resultList, getCountry }) => {
  const getSearchResults = (resultSearch) => {
    console.log(resultSearch);
    const resultLength = resultSearch.length;
    let resultToPaint = "";

    if (resultLength === 1) {
      getCountry(resultSearch[0]);
    } else if (resultSearch.length > 1 && resultSearch.length < 10) {
      resultToPaint = resultSearch;
    } else if (resultSearch.length >= 10 && resultSearch.length < 250)
      resultToPaint = "Too many matches, specify another filter";
    else if (!resultSearch.length) resultToPaint = "There are NO matches";
    else resultToPaint = "Please, input a term search";
    
    return resultToPaint;
  };

  return (
    <section>
      <Result
        result={country ?? getSearchResults(resultList)}
        getCountry={getCountry}
      />
    </section>
  );
};

export default ContainerInfo;
