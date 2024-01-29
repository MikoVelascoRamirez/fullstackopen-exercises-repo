import React from "react";

const Course = ({ course }) => {
  console.log(course);

  const Header = ({ course }) => {
    return <h1>{course}</h1>;
  };

  const Content = ({ content }) => {
    console.log(content);
    return (
      <div>
        {content.map((part) => (
          <Part id={part.id} course={part} />
        ))}
      </div>
    );
  };

  const Part = ({ course }) => {
    console.log(course);
    return (
      <p>
        {course.name} {course.exercises}
      </p>
    );
  };

  const Total = ({ total }) => {
    console.log(total);
    return (
      <b>
        Total of{" "}
        {total.reduce((result, { exercises }) => (result += exercises), 0)}{" "}
        exercises
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

export default Course;
