import React, { useEffect, useState } from "react";

const Date03 = () => {
  const [tickCount, setTickCount] = useState(0);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Tick every second up to 5 times
  useEffect(() => {
    let count = 0;

    const interval = setInterval(() => {
      count++;
      setTickCount(count);
      console.log("tick...", count);

      if (count === 5) {
        clearInterval(interval);
        console.log("Stopped after 5 ticks");
      }
    }, 1000);

    console.log("Date03 mounted");

    return () => {
      clearInterval(interval);
      console.log("cleanup");
    };
  }, []);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      console.log("window resized");
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("cleanup");
    };
  }, []);

  return (
    <div>
      <h2>USE EFFECT DEEP DOWN</h2>
      <p>Tick Count: {tickCount}</p>
      <p>
        Window Size: {windowSize.width}px × {windowSize.height}px
      </p>
    </div>
  );
};

export default Date03;
