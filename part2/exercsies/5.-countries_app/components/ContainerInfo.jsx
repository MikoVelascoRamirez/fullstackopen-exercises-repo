import React from "react";
import Result from "./Result";

const ContainerInfo = ({ country, resultList, getCountry }) => {
  const getSearchResults = (resultSearch) => {
    const resultLength = resultSearch.length;
    let resultToPaint;

    if (resultLength === 1) {
      getCountry(resultSearch[0]);
    } else if (resultLength > 1 && resultLength < 10) {
      resultToPaint = resultSearch;
    } else if (resultLength >= 10 && resultLength < 250)
      resultToPaint = { msg: 'Too many matches, specify another filter', color: 'orange' }
    else if (!resultLength) resultToPaint = { msg: 'There are NO matches', color: 'red'}
    else resultToPaint = { msg: 'Please, input a term search', color: 'blue'};
    
    return resultToPaint;
  };

  return (
    <section>      
      <Result
        result={country ?? getSearchResults(resultList)}
        getCountryHandler={(resultList.length > 1 && resultList.length < 10) ? getCountry : null}
      />
    </section>
  );
};

export default ContainerInfo;
