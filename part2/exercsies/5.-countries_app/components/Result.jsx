import React from "react";
import Message from "./Message";
import ListCountries from "./ListCountries";
import Country from "./Country";

const Result = ({ result, getCountryHandler }) => {
  return typeof result?.msg === "string" ? (
    <Message msg={result.msg} color={result.color} />
  ) : Array.isArray(result) ? (
    <ListCountries list={result} getCountry={getCountryHandler} />
  ) : result instanceof Object ? (
    <Country country={result} />
  ) : null;
};

export default Result;
