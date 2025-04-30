import React, { useState } from "react";

function Profile() {
  return <p>This is your Profile section (●'◡'●)</p>;
}

const D3004 = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>

      {show && <Profile />}
    </div>
  );
};

export default D3004;
