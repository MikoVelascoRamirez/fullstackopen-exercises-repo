import React from "react";
import Message from "./Message";
import ListCountries from "./ListCountries";
import Country from "./Country";

const Result = ({ result, getCountry }) => {
  console.log("paintResults()", typeof result);
  return typeof result === "string" ? (
    <Message msg={result} />
  ) : Array.isArray(result) ? (
    <ListCountries list={result} getCountry={getCountry} />
  ) : result instanceof Object ? (
    <Country country={result} />
  ) : null;
};

export default Result;
