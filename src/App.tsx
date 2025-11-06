import React from 'react';
import { useState } from 'react'
import './App.css'
import SumComponent from './components/SumComponent'; // Import the SumComponent



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>Vite + React</h1>
      
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <SumComponent /> {/* Use the SumComponent */}
    </>
  )
}

export default App
