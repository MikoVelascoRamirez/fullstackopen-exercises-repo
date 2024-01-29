const App = () => {
  // Variables
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },

      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },

      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },

      {
        name: "State of a component II",
        exercises: 8,
        id: 4,
      }
    ],
  };

  return <Course course={course} />
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
      <p>
        Number of exercises{" "}
        {
          total.reduce((result, {exercises}) => result += exercises, 0)
        }
      </p>
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
