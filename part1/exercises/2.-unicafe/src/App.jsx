import React from 'react'
import { useState } from 'react'

const App = () => {

  // Creating statistics states (for each opinion)
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState();

  //Event handlers for opinion buttons
  const handleGoodOpinions = () => {
    const goodOpinions = good + 1;
    const totalOpinions = goodOpinions + neutral + bad; 
    setGood(goodOpinions);
    setTotal(totalOpinions);
    setAverage((goodOpinions-bad) / totalOpinions);
    setPositive((goodOpinions/totalOpinions) * 100);
  }

  const handleNeutralOpinions = () => {
    const goodOpinions = good, badOpinions = bad;
    const neutralOpinions = neutral + 1;
    const totalOpinions = goodOpinions + neutralOpinions + badOpinions;
    setNeutral(neutralOpinions);
    setTotal(totalOpinions);
    setAverage((goodOpinions-badOpinions) / totalOpinions);
    setPositive((goodOpinions/totalOpinions) * 100);
  }

  const handleBadOpinions = () => {
    const badOpinions = bad + 1;
    const totalOpinions = good + neutral + badOpinions;
    setBad(badOpinions);
    setTotal(totalOpinions);
    setAverage((good-badOpinions) / totalOpinions);
    setPositive((good/totalOpinions) * 100);
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <section>
        <button onClick={handleGoodOpinions}>good</button>
        <button onClick={handleNeutralOpinions}>neutral</button>
        <button onClick={handleBadOpinions}>bad</button>
      </section>

      <h2>Statistics</h2>
      <section>
        <p>good <span>{good}</span></p>
        <p>neutral <span>{neutral}</span></p>
        <p>bad <span>{bad}</span></p>
        <p>all <span>{total}</span></p>
        <p>average <span>{average}</span></p>
        <p>positive <span>{positive}%</span></p>
      </section>
    </div>
  )
}

export default App
