import React, { useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h1 className="text-xl font-bold">Count: {count}</h1>
      <div className="flex gap-2">
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          +
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
