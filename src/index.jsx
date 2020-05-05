import "assets/scss/styles.scss";

import React, { Component } from "react";
import ReactDOM from "react-dom";
import Colors from "./components/Colors";
import Counter from "./components/Counter";
import Parent from "./components/Parent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Counter />
        <Colors />
        <Parent />
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
