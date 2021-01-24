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

  getData = async () => {
    this.randomUserName = await user();
  }

  componentDidMount() {

    this.randomUserName = this.getData(); 
    this.randomUserName
    .then(
      res => {
      this.setState({ loading: null, error: null, user: res });
      console.log("User Data >>> ", res); 
    })
    .catch( (err)=>{
      this.setState({ loading: null, error: err.message });
      console.log("User failure >>> ", err); 
    })

  }

  componentWillUnmount() {
    // this.randomUserName.cancel();
  }

  render() {
    return (
      <div>
        <Item onClickCancel={onClickCancel} {...this.state} />
        <div>
          Random User: <br></br>
            {this.state.user ? this.state.user: "loading..."}
        </div>
      </div>

    );
  }


}