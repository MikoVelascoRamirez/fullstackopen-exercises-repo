import React from "react";

const PersonsList = ({personsLength, filteredList, filteredListLength}) => {
  return (
    <ul>
      {!personsLength
        ? "Phonebook empty"
        : filteredListLength
        ? filteredList.map(({ name, number, id }) => {
            return (
              <li key={id}>
                {name} {number}
              </li>
            );
          })
        : "No results found"}
    </ul>
  );
};

export default PersonsList;
