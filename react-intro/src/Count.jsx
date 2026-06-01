import { useState } from "react";

const Count = () => {
  console.log("Counter Re-rendered");

  const [c, setC] = useState(0);

  const incrementHandler = () => {
    setC(c + 1);
  };
  const decrementHandler = () => {
    setC(c - 1);
  };
  console.log(c);
  return (
    <div className="counter">
      <h1>{c}</h1>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
    </div>
  );
};

export default Count;
