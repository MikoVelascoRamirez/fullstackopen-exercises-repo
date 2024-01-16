import React from 'react'
import { useState } from 'react'

const App = () => {

  // Creating statistics states (for each opinion)
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give Feedback</h1>
      <section>
        <button>good</button>
        <button>neutral</button>
        <button>bad</button>
      </section>

      <h2>Statistics</h2>
      <section>
        <p>good<span></span></p>
        <p>neutral<span></span></p>
        <p>bad<span></span></p>
      </section>
    </div>
  )
}

export default App
