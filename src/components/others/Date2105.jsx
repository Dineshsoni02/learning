import React, { useState, useCallback } from "react";

const Button = React.memo(({ onClick }) => {
  console.log("Button Rendered");
  return <button onClick={onClick}>Click Me </button>;
});

const Date2105 = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Clicked");
  }, []);
  // const handleClick = () => {
  //   console.log("Clicked");
  // }

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <Button onClick={handleClick} />
    </div>
  );
};

export default Date2105;
