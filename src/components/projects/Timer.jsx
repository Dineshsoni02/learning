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
      }, 10);
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

  const formatTimer = (ms) => {
    const hours = String(Math.floor(ms / 3600000)).padStart(2, "0");
    const minutes = String(Math.floor((ms % 3600000) / 60000)).padStart(2, "0");
    const seconds = String(Math.floor((ms % 60000) / 1000)).padStart(2, "0");
    const milliseconds = String(Math.floor((ms % 1000) / 10)).padStart(2, "0");

    return `${hours}:${minutes}:${seconds}:${milliseconds}`;
  };

  return (
    <div>
      <h2>Timer ⏲️⏳</h2>

      <p>Timer : {formatTimer(count)} </p>

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
