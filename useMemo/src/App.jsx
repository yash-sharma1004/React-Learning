

import React, { useState, useMemo } from "react";

function App() {
  const [count, setCount] = useState(0);

  const squaredValue = useMemo(() => {
    console.log("Calculating...");
    return count * count;
  }, [count]);

  return (
    <div>
      <h1>{squaredValue}</h1>
      <button onClick={() => setCount(count + 1)}>increment</button>
    </div>
  );
}
export default App