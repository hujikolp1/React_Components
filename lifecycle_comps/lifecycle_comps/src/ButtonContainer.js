import React, { Component } from "react";
import Button from "./Button";

export default class ButtonContainer extends Component {
  componentDidMount() {
    this.setState({ ...this.props, onClick: this.props.onClick.bind(this) });
  }

  render() {
    return <Button {...this.state} />;
  }
}

ButtonContainer.defaultProps = {
  onClick: () => {},
  text: "blank"
};