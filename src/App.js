import React, { useState } from 'react';
import './App.css';

const App = () => {

  const [count, setCount] = useState(0)

  const incrementCount = () => {
setCount(count +1)
    }

    return (
      <>
        <p>{ count }</p>
        <button onClick={incrementCount} className='btn'>Click Me 7 times!!!</button>
      </>
    );
  }

export default App;
        