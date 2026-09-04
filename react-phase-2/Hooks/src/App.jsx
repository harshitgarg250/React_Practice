import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter</h1>

      <h2>{count}</h2>

      <button>Increment</button>
    </div>
  );
}

export default App;