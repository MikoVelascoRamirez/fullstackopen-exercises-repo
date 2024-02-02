import React from "react";

const PersonForm = (props) => {
  const { evName, evNumber, addContact, nameVal, numVal } = props;
  return (
    <form action="">
      <div>
        name
        <input type="text" value={nameVal} onChange={evName} />
        <br />
        number
        <input type="text" value={numVal} onChange={evNumber} />
      </div>
      <div>
        <button type="submit" onClick={addContact}>
          add
        </button>
      </div>
    </form>
  );
};

export default PersonForm;
