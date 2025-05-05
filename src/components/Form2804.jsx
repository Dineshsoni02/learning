import React, { useState, useRef } from "react";

const Form2804 = () => {
  const [name, setName] = useState();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const inputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    alert("submitted " + name);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    console.log(` Name: ${formData.name}  
        Email: ${formData.email}
        Password: ${formData.password}
    `);
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmitRef() {
    alert(inputRef.current.value);
  }

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
      <br />
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={formData.name}
          name="name"
          placeholder="Enter name"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Enter E-mail"
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          value={formData.password}
          placeholder="Enter password"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>

      <form
        onSubmit={(e) => {
          e.preventDefault(), handleSubmitRef();
        }}
      >
        <input ref={inputRef} placeholder="Enter Name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form2804;
