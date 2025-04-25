import { useState } from "react";

import "./App.css";

import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Card >
        <p>Inside of the children</p>
        </Card>
    </>
  );
}

export default App;
