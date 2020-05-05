import React, { Component } from "react";

class Numbers extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.number = this.props;
	}

	render() {
		return <>{this.number}</>;
	}
}

export default Numbers;
