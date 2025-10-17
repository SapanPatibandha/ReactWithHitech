import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [count, setCount] = useState(2);

  const addValue = () => {
    if(count < 20) {
      setCount(count + 1);
    }
  }

  const decreaseValue = () => {
    if(count > 0) {
      setCount(count - 1);
    } 
  }

  return (
    <>
    <h1>Counter App : {count}</h1>
    <button onClick={addValue}>Increase</button>
    <button onClick={decreaseValue}>Decrease</button>
    </>
  )
}

export default App
