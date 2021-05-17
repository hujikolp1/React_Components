import React, { useState } from "react";
import "./App.css";
import Home from './Home';


function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <Home name="display comp name" />;
      <p>{count}</p>
      <button onClick={increment}>MORE</button>
      <button onClick={decrement}>LESS</button>
    </>
  );
}

export default App;