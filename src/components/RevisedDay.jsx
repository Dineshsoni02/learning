import React, { useEffect,useState, useMemo } from "react";

const RevisedDay = () => {
  const [count, setCount] = useState(0);
  console.log("rendered");

  

 
  
  return (
    <div>
      <p>count : {count}</p>
      <p>{isEven ? "Even" : "Odd"}</p>

      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
    </div>
  );
};

export default RevisedDay;
