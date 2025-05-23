import React, { useState, useRef, useEffect } from "react";

const Date05UseRef = () => {
  const [count, setCount] = useState(0);
  const inputRef = useRef(null);
  const intervalRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  //*  counter
  //   useEffect(() => {
  //     intervalRef.current = setInterval(() => {
  //       setCount((prev) => prev + 1);
  //     }, 1000);
  //     return () => clearInterval(intervalRef.current);
  //   }, []);

  //*   useEffect(() => {
  //     const handleClick = (e) => {
  //       console.log(e.target);
  //     };
  //     document.addEventListener("click", handleClick);

  //     return () => {
  //       document.removeEventListener("click", handleClick);
  //     };
  //   }, []);

  //* PREV COunt

  const prevCount = useRef();
  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  //?🔑 5. Avoiding Re-renders
  const counter = useRef(0);

  function handleClick() {
    counter.current += 1;
  }

  return (
    <div>
      <h2>Date05UseRef</h2>
      <input ref={inputRef} type="text" placeholder="Enter Name" />
      <button onClick={handleFocus}>Focus Input</button>
      <p>Count : {count} </p>
      <p>Previous: {prevCount.current}</p>

      <p>Counter: {counter.current}</p>
      <button onClick={handleClick}>Increase</button>
    </div>
  );
};

export default Date05UseRef;
