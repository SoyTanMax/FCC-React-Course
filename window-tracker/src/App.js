import { useState } from 'react';
import './App.css';
import WindowTracker from './WindowTracker'

function App() {

  const [show, setShow] = useState(true)
  function toggle(){
    setShow(prevShow => !prevShow)
  }
  return (
    <div className="App">
      <button onClick={toggle}>Toggle Window Tracker</button>
      {show && <WindowTracker />}
    </div>
  );
}

export default App;
