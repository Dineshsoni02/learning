import React, { useEffect, useRef } from "react";
import { useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);

  const timer = useRef(null);

  useEffect(() => {
    timer.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer.current);
  }, []);

  return (
    <div>
      <h2>Timer ⏲️⏳</h2>

      <p>Count: {count} </p>

      <div className="flex gap-2 bg-blue ">
        <button className="bg-blue" >Start</button>
        <button> Reset</button>
      </div>
    </div>
  );
};

export default Timer;
