import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";

export default function App() {
  const [MyComponent, setMyComponent] = useState(() => () => null);

  useEffect(() => {
    import("./FirstComponent").then(module => {
      setMyComponent(() => module.default);
    });
  }, []);

  return <MyComponent />;
}
