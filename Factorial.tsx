import React, { useState } from 'react';

const Factorial: React.FC = () => {
  const [number, setNumber] = useState<number>(0);
  const [result, setResult] = useState<number>(1);

  const calculateFactorial = (n: number): number => {
    if (n < 0) return 0; // Factorial not defined for negative numbers
    if (n === 0 || n === 1) return 1;
    return n * calculateFactorial(n - 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    const safeValue = isNaN(value) ? 0 : value;
    setNumber(safeValue);
    setResult(calculateFactorial(safeValue));
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h1 className="text-xl font-bold">Factorial Calculator</h1>
      <input
        type="number"
        value={number}
        onChange={handleChange}
        className="border px-4 py-2 rounded"
        min="0"
      />
      <p className="text-lg">Factorial: {result}</p>
    </div>
  );
};

export default Factorial;
