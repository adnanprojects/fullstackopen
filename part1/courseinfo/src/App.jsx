function App() {

  const Header = (props) => {
    console.log(props);
    return <h1>{props.course}</h1>;
  }

  const Content = (parts) => {
    console.log(parts);
    return <>{parts.map(item => item.name)}</>
  }

  const Total = (parts) => {
    console.log(parts);
    return <>{parts.map(item => item.exercises)}</>
  }

  const course = 'Half Stack application development'
  const parts = [
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
  ];

  return (
    <>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </>
  )
}

export default App;
