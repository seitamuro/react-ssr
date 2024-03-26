import { useState } from "react";

export const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div>Count: {counter}</div>
      <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
    </>
  );
};
