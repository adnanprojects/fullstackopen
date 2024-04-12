import { useState } from 'react';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutal, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    setGood(prevGood => prevGood + 1);
  }

  const handleNeutarl = () => {
    setNeutral(prevNeutal => prevNeutal + 1);
  }

  const handleBad = () => {
    setBad(prevBad => prevBad + 1);
  }

  return (
    <>
      <h1>give feedback</h1>

      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutarl}>neural</button>
      <button onClick={handleBad}>bad</button>

      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutal}</p>
      <p>bad {bad}</p>
    </>
  );
}

export default App;
