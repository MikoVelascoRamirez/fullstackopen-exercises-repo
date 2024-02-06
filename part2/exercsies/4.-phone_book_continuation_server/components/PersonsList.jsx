import React from "react";

const PersonsList = ({personsLength, deleteContact, filteredList, filteredListLength}) => {
  return (
    <ul>
      {!personsLength
        ? "Phonebook empty"
        : filteredListLength
        ? filteredList.map(({ name, number, id }) => {
            return (
              <li key={id}>
                {name} {number}
                <button id={id} onClick={() => deleteContact(id)}>delete</button>
              </li>
            );
          })
        : "No results found"}
    </ul>
  );
};

export default PersonsList;
