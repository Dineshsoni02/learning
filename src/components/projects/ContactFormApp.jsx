import React, { useState } from "react";

const ContactFormApp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <h1>Contact Form App</h1>
      <form onSubmit={handleFormSubmit} className="form">
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={formData?.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="E-Mail"
          value={formData?.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="message"
          value={formData?.message}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>

      {formData.name && <p>Name: {formData.name}</p>}
      {formData.email && <p>Email : {formData.email}</p>}
      {formData.message && <p>Message : {formData.message}</p>}
    </div>
  );
};

export default ContactFormApp;
