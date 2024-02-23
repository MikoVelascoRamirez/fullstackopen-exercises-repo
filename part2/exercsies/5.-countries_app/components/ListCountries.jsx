import React from "react";

const ListCountries = ({list, getCountry}) => {
  return (
    <ul>
      {list.map(({ name, key_id }) => {
        return (
          <li key={key_id}>
            {name} <button onClick={() => getCountry({ name })}>show</button>
          </li>
        );
      })}
    </ul>
  );
};

export default ListCountries;
