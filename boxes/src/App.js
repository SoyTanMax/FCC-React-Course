import { useState } from 'react';
import './App.css';
import boxes from './boxes'
import Box from './components/Box'

function App() {
  const [squares, setSquares] = useState(boxes);

  function toggle(id){
    setSquares(prevSquares => {
      return prevSquares.map(square => {
        return square.id === id ? {...square, on: !square.on} : square
      })
    })
  }

  const squareElements = squares.map(square => (
    <Box 
      key={square.id} 
      on={square.on} 
      toggle={() => toggle(square.id)} 
    />
  ));

  return (
    <div className="App">
      {squareElements}
    </div>
  );
}

export default App;
