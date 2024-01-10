const App = () => {
  // Variables
  const course = 'Half Stack application development';
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10
    },
  
    {
      name: "Using props to pass data",
      exercises: 7
    },
    
    {
      name: "State of a component",
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course}/>
      <Content content={ parts }/>
      <Total total = { parts }/>
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
      <Part course = { content[0] }/>
      <Part course = { content[1] }/>
      <Part course = { content[2] }/>
    </div>
  )
}

const Part = ({ course }) => {
  return (
    <p>{ course.name } { course.exercises }</p>
  )
}

const Total = ({ total }) => {

  return (
    <p>
      Number of exercises { total[0].exercises + total[1].exercises + total[2].exercises }
    </p>
  );
}

export default App;