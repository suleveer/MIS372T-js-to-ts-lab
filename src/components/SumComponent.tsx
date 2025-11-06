import React, { useState } from 'react';

function SumComponent() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [sum, setSum] = useState(0);

  const calculateSum = () => {
    // Deliberate type error: num1 and num2 should be numbers, but we treat them as strings
    setSum(num1 + num2);
  };
 

  return (
    <div>
      <br></br>
      <input type="number" className="w-full max-w-md px-4 py-2 text-white bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-600 rounded-full border-none placeholder-pink-200 shadow-[0_0_20px_rgba(255,0,255,0.6)] focus:shadow-[0_0_30px_rgba(0,255,255,0.8)] focus:scale-105 transition-all duration-300" value={num1} onChange={(e) => setNum1(Number(e.target.value))} />
      <input type="number" className="w-full max-w-md px-4 py-2 text-white bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-600 rounded-full border-none placeholder-pink-200 shadow-[0_0_20px_rgba(255,0,255,0.6)] focus:shadow-[0_0_30px_rgba(0,255,255,0.8)] focus:scale-105 transition-all duration-300" value={num2} onChange={(e) => setNum2(Number(e.target.value))} />
      <button className="relative inline-block px-6 py-3 font-extrabold text-white uppercase tracking-widest bg-gradient-to-r from-pink-500 via-yellow-400 to-green-500 rounded-full shadow-[0_0_20px_rgba(255,0,255,0.6)] hover:shadow-[0_0_30px_rgba(0,255,255,0.9)] hover:scale-110 hover:rotate-1 active:scale-95 transition-all duration-300 ease-in-out" onClick={calculateSum}>Calculate Sum</button>
      <br></br>
      <br></br>
      <hr></hr>
      <br></br>
      <br></br>
      <p className = "text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-yellow-400 to-cyan-400 drop-shadow-[0_0_20px_rgba(255,0,255,0.6)]">Sum: {sum}</p>
    </div>
  );
}

export default SumComponent;
