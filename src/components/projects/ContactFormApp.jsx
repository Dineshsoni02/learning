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

    const newErrors = {
      name: formData.name ? "" : "Name required",
      email:
        !formData.email || !formData.email.includes("@")
          ? "Valid Email required"
          : "",
      message: formData.message ? "" : "Message required",
    };

    setError(newErrors);

    const hasError = Object.values(newErrors).some((err) => err !== "");
    if (hasError) return;

    console.log("Submitted:", formData);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
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
          value={formData.name}
          onChange={handleChange}
        />
        {error.name && <p style={{ color: "red" }}>{error.name}</p>}

        <input
          type="email"
          name="email"
          placeholder="E-Mail"
          value={formData.email}
          onChange={handleChange}
        />
        {error.email && <p style={{ color: "red" }}>{error.email}</p>}

        <input
          type="text"
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
        />
        {error.message && <p style={{ color: "red" }}>{error.message}</p>}

        <button type="submit">Submit</button>
      </form>

      {formData.name && <p>Name: {formData.name}</p>}
      {formData.email && <p>Email: {formData.email}</p>}
      {formData.message && <p>Message: {formData.message}</p>}
    </div>
  );
};

export default ContactFormApp;
