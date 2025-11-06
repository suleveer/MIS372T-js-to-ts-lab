import React from 'react';
import { useState } from 'react'
import './App.css'
import SumComponent from './components/SumComponent'; // Import the SumComponent



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h2 className = "text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-yellow-400 to-cyan-400 drop-shadow-[0_0_20px_rgba(255,0,255,0.6)]">Vite + React</h2>
      
      <p className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-yellow-400 to-cyan-400 drop-shadow-[0_0_20px_rgba(255,0,255,0.6)]">
        Click on the Vite and React logos to learn more
      </p>
      <SumComponent /> {/* Use the SumComponent */}
    </>
  )
}

export default App
