import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count => count + 1);
  }

  function decrement() {
    if (count > 0) {
      setCount(count => count - 1);
    }
  }

  function reset() {
    setCount(0);
  }

  return (
    <div>
      <h1>Counter App</h1>

      <h2>{count}</h2>

      <button onClick={increment}>+</button>

      <button onClick={decrement}>-</button>

      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;