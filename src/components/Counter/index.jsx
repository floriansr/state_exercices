import React, { Component } from "react";
import Numbers from "../Numbers";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { currentNumber: 0 };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment = () => {
    this.setState({ currentNumber: this.state.currentNumber + 1 });
  };

  decrement = () => {
    this.setState({ currentNumber: this.state.currentNumber - 1 });
  };

  render() {
    return (
      <>
        <Numbers number={this.state.currentNumber.toString()} />
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </>
    );
  }
}

export default Counter;
