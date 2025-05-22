import React, { useState, useMemo } from "react";

const UseMemoFun = () => {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  const slowFunction = (num) => {
    console.log("Computing...");
    for (let i = 0; i < 1e9; i++) {}
    return num * 2;
  };

  const doubleCount = useMemo(() => slowFunction(count), [count]);
//   const doubleCount = () => slowFunction(count);

  const themeStyles = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#000",
  };

  return (
    <div style={themeStyles}>
      <h2>{doubleCount}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setDark(!dark)}>Toggle Theme</button>
    </div>
  );
};

export default UseMemoFun;
