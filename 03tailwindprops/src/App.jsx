import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Card userName="John Doe" />
      <Card userName="Jane Smith" />
    </>
  )
}

export default App
