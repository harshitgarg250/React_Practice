import { useState, useEffect } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    document.title = `Count: ${count}`; // standard way of useEffect
  }, [count]);
  return (
    <div className="counter">
      <h2>Counter</h2>
      <h3>Count :{count}</h3>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
export default Counter;
