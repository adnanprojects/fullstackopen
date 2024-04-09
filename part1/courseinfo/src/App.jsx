function App() {

  const Header = (props) => {
    console.log(props.course, 'header');
    return <h1>{props.course.name}</h1>;
  }

  const Content = (props) => {
    console.log(props, 'content');
    return <>
      <p>{props.parts[0].name}</p>
      <p>{props.parts[1].name}</p>
      <p>{props.parts[2].name}</p>
    </>
  }

  const Total = (props) => {
    console.log(props, 'total');
    return <>
      <p>{props.parts[0].exercises}</p>
      <p>{props.parts[1].exercises}</p>
      <p>{props.parts[2].exercises}</p>
    </>
  }

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )
}

export default App;
