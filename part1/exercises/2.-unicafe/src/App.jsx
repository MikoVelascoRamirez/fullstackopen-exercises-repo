import React from 'react'
import { useState } from 'react'

const App = () => {

  // Creating statistics states (for each opinion)
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  //Event handlers for opinion buttons
  const handleGoodOpinions = () => {
    setGood(value => value + 1);
    setTotal(value => value + 1);
  }

  const handleNeutralOpinions = () => {
    setNeutral(value => value + 1);
    setTotal(value => value + 1);
  }

  const handleBadOpinions = () => {
    setBad(value => value + 1);
    setTotal(value => value + 1);
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
        <p>average <span></span></p>
        <p>positive <span></span></p>
      </section>
    </div>
  )
}

export default App
