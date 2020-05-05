import React, { Component } from "react";

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    console.log("Child is mounting");
  };

  componentWillUnmount = () => {
    console.log("child is UNmounting");
  };

  render() {
    return <p>Child</p>;
  }
}

export default Child;
