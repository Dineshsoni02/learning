import React from "react";

import Card from "./Card";

function ButtonClicked() {
  function handleClick(name) {
    alert(`button clicked ${name} `);
  }

  return <button onClick={() => handleClick("poplu")}>Click </button>;
}

function Greeting({ isLoggedIn = true }) {
  if (isLoggedIn) {
    return <h1>Welcome Back!</h1>;
  }
  return <h1>Please Sign In</h1>;
}

function IsNewMessage({ isMessage }) {
  return <div>{isMessage && <p>New message received</p>} </div>;
}

const Learning = () => {
  return (
    <div className="hero">
      <Card>
        <p>Inside of the children</p>
      </Card>
      <ButtonClicked />
      <Greeting />
      <IsNewMessage isMessage={true} />
    </div>
  );
};

export default Learning;
