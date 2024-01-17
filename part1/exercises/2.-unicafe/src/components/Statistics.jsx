import React from "react";
import StatisticLine from "./StatisticLine";

const Statistics = ({ good, neutral, bad, total, average, positive }) => {
  if (total === 0) return <p>No feedback given</p>;
  else {
    return (
      <table>
        <tbody>
          <tr>
            <StatisticLine text="good" value={good}/>
          </tr>
          <tr>
            <StatisticLine text="neutral" value={neutral}/>
          </tr>
          <tr>
            <StatisticLine text="bad" value={bad}/>
          </tr>
          <tr>
            <StatisticLine text="all" value={total}/>
          </tr>
          <tr>
            <StatisticLine text="average" value={average}/>
          </tr>
          <tr>
            <StatisticLine text="positive" value={positive}/>
          </tr>
        </tbody>
      </table>
    );
  }
};

export default Statistics;
