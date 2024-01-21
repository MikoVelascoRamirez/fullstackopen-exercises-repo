import React, { useState } from 'react'

const App = () => {
  
  // Common variables
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  // State variables
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState({
    0 : 0, 1 : 0, 2 : 0, 3 : 0, 4 : 0, 5 : 0, 6 : 0, 7 : 0
  })
  const [mostVotedAnecdote, setMostVotedAnecdote] = useState(0);

  // Events handlers

  const showAnecdote = () => {
    const indexAnecdote = Math.floor(Math.random() * 8);
    setSelected(indexAnecdote);
  }

  const registerVote = () => {
    const anecdoteNumber = selected;
    const copyPointsObj = {
      ...points, 
      [anecdoteNumber] : points[anecdoteNumber] += 1
    };
    setPoints(copyPointsObj);
    setMostVotedAnecdote(getMostVoteAnecdote());
  }

  // Not-handling Functions
  const getMostVoteAnecdote = () => {
    const arrayOfPoints = Object.entries(points)
    const [mostVotedIndex] = arrayOfPoints.sort((a,b) => b[1] - a[1])[0]
    return mostVotedIndex;
  }

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <button onClick={registerVote}>vote</button>
      <button onClick={showAnecdote}>Show Random Anecdote</button>
    </div>
  )
}

export default App