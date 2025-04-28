import React, { useState } from "react";

const Form2804 = () => {
  const [name, setName] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    alert("submitted " + name);
  }

  console.log(name);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form2804;
