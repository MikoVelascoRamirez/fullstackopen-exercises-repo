import React from "react";

const Filter = ({ev}) => {
  return (
    <div>
      Filter shown with{" "}
      <input type="text" onChange={ev} />
    </div>
  );
};

export default Filter;
