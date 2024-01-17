import React from "react";

const Statistics = ({ good, neutral, bad, total, average, positive }) => {
  if (total === 0) return <p>No feedback given</p>;
  else {
    return (
      <section>
        <p>good <span>{good}</span></p>
        <p>neutral <span>{neutral}</span></p>
        <p>bad <span>{bad}</span></p>
        <p>all <span>{total}</span></p>
        <p>average <span>{average}</span></p>
        <p>positive <span>{positive}%</span></p>
      </section>
    );
  }
};

export default Statistics;
