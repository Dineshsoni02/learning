import React from "react";
import ReactForm from "./ReactForm";
import Timer from "./Timer";
// import Counter from "./Counter";
import ContactFormApp from "./ContactFormApp";
import Counter from "../../features/counter/Counter";

const Projects = () => {
  return (
    <div>
      <h2>Projects</h2>
      {/* <Timer />
      <Counter /> */}
      {/* <ContactFormApp /> */}
      <ReactForm />
      <Counter />
    </div>
  );
};

export default Projects;
