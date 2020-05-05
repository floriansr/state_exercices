import React, { Component } from "react";

class Colors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastColor: "red",
    };
    this.showColor = this.showColor.bind(this);
  }

  showColor = (x) => {
    const newColor = x;
    this.setState({
      lastColor: newColor,
    });
  };

  render() {
    const { lastColor } = this.state;

    return (
      <>
        <div className="wrap-row">
          <div
            onClick={() => this.showColor("red")}
            className="square red"
          ></div>
          <div
            onClick={() => this.showColor("blue")}
            className="square blue"
          ></div>
          <div
            onClick={() => this.showColor("yellow")}
            className="square yellow"
          ></div>
          <div
            onClick={() => this.showColor("green")}
            className="square green"
          ></div>
        </div>
        <p>The last color clicked is {lastColor}</p>
      </>
    );
  }
}

export default Colors;
