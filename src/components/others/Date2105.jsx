import React, { useState, useCallback } from "react";

const Button = React.memo(({ onClick }) => {
  console.log("Button rendered");
  return <button onClick={onClick}>Click me</button>;
});

const Date2105 = () => {
  const [count, setCount] = useState(0);

//   const handleClick = useCallback(() => {
//     console.log("Clicked");
//   }, []); // ← Only recreated when dependencies change
  const handleClick = useCallback(()=>{
    console.log("clicked");
  },[]); // only re-render when count changes

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <Button onClick={handleClick} />
    </div>
  );
};

export default Date2105;
