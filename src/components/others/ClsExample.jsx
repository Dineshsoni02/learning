import React, { Component } from "react";

class ClsExample extends Component {
  constructor() {
    super();
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  render() {
    console.log("render");
    return (
      <div>
        <h1>Class based example</h1>
      </div>
    );
  }
}

export default ClsExample;
