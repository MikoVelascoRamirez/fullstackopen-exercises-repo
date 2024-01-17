import React from "react";
import StatisticLine from "./StatisticLine";

const Statistics = ({ good, neutral, bad, total, average, positive }) => {
  if (total === 0) return <p>No feedback given</p>;
  else {
    return (
      <section>
        <StatisticLine text="good" value={good}/>
        <StatisticLine text="neutral" value={neutral}/>
        <StatisticLine text="bad" value={bad}/>
        <StatisticLine text="all" value={total}/>
        <StatisticLine text="average" value={average}/>
        <StatisticLine text="positive" value={positive}/>
      </section>
    );
  }
};

export default Statistics;
