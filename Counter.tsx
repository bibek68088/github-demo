import React, { useState, useEffect } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log(`Count updated: ${count}`);
  }, [count]);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => (prev > 0 ? prev - 1 : 0)); // Prevents negative
  const reset = () => setCount(0);

  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-semibold text-gray-800">Count: {count}</h1>
      <div className="flex gap-3">
        <button
          onClick={increment}
          className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg"
        >
          +
        </button>
        <button
          onClick={decrement}
          className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg"
        >
          -
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
