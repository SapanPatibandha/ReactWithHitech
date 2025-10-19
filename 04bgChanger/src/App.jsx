import { useState } from 'react'
import Header from './component/header.jsx';
import ColorButton from './component/button.jsx';

function App() {
  const [color, setColor] = useState('bg-gray-800')

  return (
    <div className={`h-screen flex flex-col items-center justify-center ${color} transition-colors duration-500`} >  
      <Header />

      <div className="space-x-4">
        <ColorButton color="bg-red-600" onClick={() => setColor('bg-red-600')} Name="Red" />
        <ColorButton color="bg-green-600" onClick={() => setColor('bg-green-600')} Name="Green" />
        <ColorButton color="bg-blue-600" onClick={() => setColor('bg-blue-600')} Name="Blue" />
        <ColorButton color="bg-yellow-600" onClick={() => setColor('bg-yellow-600')} Name="Yellow" />
      </div>
    </div>
  )
}

export default App
