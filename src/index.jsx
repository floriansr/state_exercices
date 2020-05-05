import "assets/scss/styles.scss";

import React, { Component } from "react";
import ReactDOM from "react-dom";
import Colors from "./components/Colors";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Colors />
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
