import React, { useEffect, useState, useRef } from "react";





const WithoutRef = () => {
  const [tickCount, setTickCount] = useState(0);

  useEffect(() => {
    let count = 0;
    let interval = setInterval(() => {
      count++;
      setTickCount(count);
      console.log("tick (no ref)", count);
      if (count === 5) {
        clearInterval(interval);
        console.log("stopped");
      }
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log("cleanup (no ref)");
    };
  }, []);

  // Simulate re-render by updating unrelated state
  const [dummy, setDummy] = useState(0);

  return (
    <div>
      <h2>Without useRef</h2>
      <p>Tick Count: {tickCount}</p>
      <button onClick={() => setDummy(dummy + 1)}>Re-render</button>
    </div>
  );
};






const WithRef = () => {
  const [tickCount, setTickCount] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    let count = 0;
    intervalRef.current = setInterval(() => {
      count++;
      setTickCount(count);
      console.log("tick (with ref)", count);
      if (count === 5) {
        clearInterval(intervalRef.current);
        console.log("stopped");
      }
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
      console.log("cleanup (with ref)");
    };
  }, []);

  // Simulate re-render
  const [dummy, setDummy] = useState(0);

  return (
    <div>
      <h2>With useRef</h2>
      <p>Tick Count: {tickCount}</p>
      <button onClick={() => setDummy(dummy + 1)}>Re-render</button>
    </div>
  );
};









const Date03 = () => {
  const [tickCount, setTickCount] = useState(0);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const intRef = useRef(null);
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current++;
    console.log("Rendered:", renderCount.current, "times");
  });

  useEffect(() => {
    let count = 0;
    // const  interval = setInterval(() => {
    intRef.current = setInterval(() => {
      count++;
      setTickCount(count);
      if (count === 5) clearInterval(intRef.current);
      // if (count === 5) clearInterval(interval);
    }, 1000);

    return () => clearInterval(intRef.current);
    // return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <h2>USE EFFECT DEEP DOWN</h2>
      <p>Tick Count: {tickCount}</p>
      <p>
        Window Size: {windowSize.width}px × {windowSize.height}px
      </p>
      <p>Render Count: {renderCount.current}</p>
      <WithoutRef />
      <WithRef />
    </div>
  );
};

export default Date03;
