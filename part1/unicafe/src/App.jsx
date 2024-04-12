import { useState } from 'react';

const App = () => {
  const [good, setGood] = useState(0);

  const handleGood = () => {
    setGood(prevGood => prevGood + 1);
  }

  return (
    <>
      <h1>give feedback</h1>

      <button onClick={handleGood}>Good</button>

      <h2>statistics</h2>
      <h3>good {good}</h3>
    </>
  );
}

export default App;
