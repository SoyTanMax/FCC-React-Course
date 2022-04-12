import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [starWarsData, setStarWarsData] = useState({})
  const [count, setCount] = useState(1)
  useEffect(()=>{
    fetch(`https://swapi.dev/api/people/${count}`)
      .then(res => res.json())
      .then(data => setStarWarsData(data))
  },[count])

  return (
    <div className="App">
      <h1>Character index: {count}</h1>
      <button onClick={()=> setCount(prevCount => prevCount + 1)}>Get next character</button>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  );
}

export default App;
