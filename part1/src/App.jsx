import './App.css';

function App() {
  const now = new Date();
  const a = 20;
  const b = 10;
  console.log(now, a + b);
  return (
    <>
      <div>
        <p>Hello Nishat, it is {now.toDateString()}</p>
        <p>{a} plus {b} is {a + b}</p>
      </div>
    </>
  );
}

export default App;
