const App = () => {
  // Variables
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1,
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2,
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3,
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1,
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2,
        },
      ],
    },
  ]
  return (
    <>
      <h1>Web development curriculum</h1>
      {
        courses.map(course => <Course course={course} />)
      }
    </>
  )
};

const Course = ({course}) => {

  console.log(course)
  
  const Header = ({ course }) => {
    return <h1>{course}</h1>;
  };

  const Content = ({ content }) => {
    console.log(content)
    return (
      <div>
        {
          content.map(part => <Part id={part.id} course={part}/>)
        }
      </div>
    );
  };

  const Part = ({ course }) => {
    console.log(course)
    return (
      <p>
        {course.name} {course.exercises}
      </p>
    );
  };

  const Total = ({ total }) => {
    console.log(total)
    return (
      <b>
        Total of { total.reduce((result, {exercises}) => result += exercises, 0) } exercises
      </b>
    );
  };

  return (
    <div>
      <Header course={course.name} />
      <Content content={course.parts} />
      <Total total={course.parts} />
    </div>
  );
};

export default App;
