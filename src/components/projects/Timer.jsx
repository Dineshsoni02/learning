import React, { useEffect, useRef } from "react";
import { useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const timer = useRef(null);

  useEffect(() => {
    if (isRunning) {
      timer.current = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(timer.current);
  }, [isRunning]);

  const startStopTimer = () => {
    setIsRunning((prev) => !prev);
  };
  const resetTimer = () => {
    clearInterval(timer.current);
    setIsRunning(false);
    setCount(0);
  };

  return (
    <div>
      <h2>Timer ⏲️⏳</h2>

      <p>Count: {count} </p>

      <div className="flex gap-2 ">
        <button style={{ marginRight: "10px" }} onClick={startStopTimer}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <button onClick={resetTimer}> Reset</button>
      </div>
    </div>
  );
};

export default Timer;
