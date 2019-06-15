import React, { useState } from 'react';
import './App.css';

const App = () => {

  const [count, setCount] = useState(0)

  const [isOn, setIsOn] = useState(false)

  const incrementCount = () => {
    setCount(count +1)
  }

    const toggleLight = () => {
      setIsOn(prevIsOn => !prevIsOn)
    }

    return (
      <>
        <p>{ count }</p>
        <button onClick={incrementCount} className='btn'>Click Me 7 times!!!</button>

        <h2>Toggle light</h2>
        <div
          style={{
            height: '50px',
            width: '50px',
            background: isOn ? 'yellow' : 'grey',
            padding: '25px',
            margin: '25px'
            }}
            onClick={toggleLight}
        ></div>
      </>
    );
  }

export default App;
        