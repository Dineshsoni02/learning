import React, { useState } from "react";

import Card from "./Card";
import Form2804 from "./Form2804";
import D2930 from "./D2930";


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

function LoginLogout() {
  const [isLogged, setIsLogged] = useState(true);

  function handleLoginLogout() {
    setIsLogged(!isLogged);
  }

  return (
    <div>
      <button onClick={handleLoginLogout}>
        {isLogged ? "Logout" : "Login"}
      </button>

      <p>
        {isLogged
          ? "Hello welcome, you are logged in!"
          : "You are logged out! Please login!!"}
      </p>
    </div>
  );
}

function SubApp({ isSub }) {
  return <p>{isSub ? "Subscribed" : "Not Subscribed"}</p>;
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
      <LoginLogout />
      <SubApp isSub={true} />
      <Form2804 />
      <D2930 /> 
    </div>
  );
};

export default Learning;
