import React, { Component } from "react";
import { render } from "react-dom";
import { user } from "./mock_api";
import Item from "./Item";

const onClickCancel = e => {
  e.preventDefault();
  render(<div>Done</div>, document.getElementById("root"));
};

export default class ItemContainer extends Component {
  state = {
    error: null,
    loading: "...",
    user: []
  };

  componentDidMount() {
    this.api = user();

    this.api
    .then(
      res => {
        this.setState({ loading: null, error: null, user: res });
        console.log("User >>> ", res); 
      }
    )
    .catch( (err)=>{
      this.setState({ loading: null, error: err });
      console.log("User failure >>> ", err); 
    })

    
  }

  componentWillUnmount() {
    this.api.cancel();
  }

  render() {
    return <Item onClickCancel={onClickCancel} {...this.state} />;
  }


}