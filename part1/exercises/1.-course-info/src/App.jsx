const App = () => {
  // Variables
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content content={
        [
          { part: part1, exercises: exercises1 },
          { part: part2, exercises: exercises2 },
          { part: part3, exercises: exercises3 }
        ]
      }/>
      <p>Number of exercises { exercises1 + exercises2 + exercises3 }</p>
    </div>
  )
}

const Header = ({course}) => {
  return (
    <h1>{ course }</h1>
  )
}

const Content = ({ content }) => {
  
  return (
    <div>
      <p>{ content[0].part } { content[0].exercises }</p>
      <p>{ content[1].part } { content[1].exercises }</p>
      <p>{ content[2].part } { content[2].exercises }</p>
    </div>
  )
}

export default App;