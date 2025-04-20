import React, { useState, useEffect } from 'react';

const Factorial: React.FC = () => {
  const [number, setNumber] = useState<number>(0);
  const [result, setResult] = useState<number | string>(1);
  const [error, setError] = useState<string>("");

  const MAX_SAFE_INPUT = 170; // Prevent Infinity (because 171! is Infinity in JS)

  const calculateFactorial = (n: number): number => {
    if (n < 0) return 0;
    let fact = 1;
    for (let i = 2; i <= n; i++) {
      fact *= i;
    }
    return fact;
  };

  useEffect(() => {
    if (number > MAX_SAFE_INPUT) {
      setError(`Input too large! Max is ${MAX_SAFE_INPUT}`);
      setResult("Overflow");
    } else {
      setError("");
      const factorial = calculateFactorial(number);
      setResult(factorial);
      console.log(`Factorial of ${number} is ${factorial}`);
    }
  }, [number]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    const safeValue = isNaN(value) ? 0 : value;
    setNumber(safeValue);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-white shadow-md rounded-lg max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-gray-800">Factorial Calculator</h1>
      <input
        type="number"
        value={number}
        onChange={handleChange}
        min="0"
        className="border border-gray-300 px-4 py-2 rounded w-full"
        placeholder="Enter a number"
      />
      {error && <p className="text-red-500">{error}</p>}
      <p className="text-lg font-medium text-gray-700">
        Result: <span className="font-bold">{result}</span>
      </p>
    </div>
  );
};

export default Factorial;
