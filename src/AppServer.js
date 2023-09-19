import React from "react";
import { useState } from "react";

const AppServer = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>SSR React App</h1>
      <p>Count: {count}</p>
      <button
        onClick={() => {
          setCount((prevCount) => prevCount + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount((prevCount) => prevCount - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default AppServer;
