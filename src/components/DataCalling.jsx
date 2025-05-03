import React, { useState } from "react";

function Parent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ChildA count={count} />
      <ChildB setCount={setCount} />
    </>
  );
}

function ChildA({ count }) {
  return <h1>Count : {count}</h1>;
}
function ChildB({ setCount }) {
  return (
    <button onClick={() => setCount((prev) => prev + 1)}> increment </button>
  );
}

function NewApp() {
  const user = "Apple";
  return <Parent1 user={user} />;
}
function Parent1({ user }) {
  return <Child1 user={user} />;
}
function Child1({ user }) {
  return <GChild1 user={user} />;
}
function GChild1({ user }) {
  return <h2>Name : {user}</h2>;
}

function Parent2() {
  return <Child2 name="Alice" />;
}

function Child2({ name }) {
  return <h1>Hello {name}</h1>;
}

function Parent3() {
  const handleData = (data) => {
    console.log("Data from child", data);
  };
  return (
    <>
      <Child3 sendData={handleData} />
    </>
  );
}

function Child3({ sendData }) {
  return <button onClick={() => sendData("Hello")}> Data from Child </button>;
}

const DataCalling = () => {
  return (
    <div>
      DataCalling
      <Parent />
      <NewApp />
      <Parent2 />
      <Parent3 />
    </div>
  );
};

export default DataCalling;
