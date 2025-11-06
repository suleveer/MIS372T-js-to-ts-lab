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
      <input type="number" className="focus:border-transparent px-4 py-2" value={num1} onChange={(e) => setNum1(Number(e.target.value))} />
      <input type="number" className="focus:border-transparent px-4 py-2" value={num2} onChange={(e) => setNum2(Number(e.target.value))} />
      <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={calculateSum}>Calculate Sum</button>
      <br></br>
      <br></br>
      <hr></hr>
      <br></br>
      <br></br>
      <p>Sum: {sum}</p>
    </div>
  );
}

export default SumComponent;
