function App() {

  const Header = (props) => {
    console.log(props, 'header');
    return <h1>{props.course}</h1>;
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
