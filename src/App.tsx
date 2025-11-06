import React from 'react';
import { useState } from 'react'
import './App.css'
import SumComponent from './components/SumComponent'; // Import the SumComponent



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h2 className = "text-4xl text-blue-600">Vite + React</h2>
      
      <p className="text-4xl font-bold text-center text-blue-600 underline decoration-wavy decoration-pink-500 mt-10">
        Click on the Vite and React logos to learn more
      </p>
      <br></br>
      <SumComponent /> {/* Use the SumComponent */}
    </>
  )
}

export default App
