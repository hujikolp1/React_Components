import React, { Component } from "react";

export default class Bound extends Component {
  state = {
    error: null
  };

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    if (this.state.error === null) {
      return this.props.children;
    } 
    else {
      return <span>{this.state.error.toString()}</span>;
    }
  }
}