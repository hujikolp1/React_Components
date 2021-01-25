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
    userList: []
  };


  componentDidMount() {
    // pass true to user to reject promise 
    let tempArr = [1,2,3,4,5]; 
    let asyncAPI = async () => {
      return await user();
    }
    let userList = asyncAPI(); 
    userList.then( (res)=>{
      console.log("RES: ", res , " typeof ", typeof res);
      this.setState({ loading: null, error: null, userList: tempArr });
    }).catch( (err)=>{

    })
    // userList
    // .then( res => {
    //   // for(let i=0;i<Object.keys(res).length;i++){
    //   //   tempArr.push(res[i]);
    //   //   console.log("res[i] >>> ", res[i], " typeof ", typeof res[i]);
    //   // }

    // })
    // .catch( err=>{
    //   this.setState({ loading: null, error: err.message });
    //   console.log("User failure >>> ", err); 
    // })


  }

  componentWillUnmount() {
    // this.userList.cancel();
  }

  static getDerivedStateFromProps(props, state) {
    return {
      ...state,
      loading: state.userList.length === 0 ? props.loading : "finished"
    };
  }

  //--------------------------------------
  // All other Lifecycle funcs for classes
  //--------------------------------------

  render() {
    return (
      <React.Fragment>
        <h2><span>Item Container</span></h2>
        User List: {this.state.userList} 
        <Item onClickCancel={onClickCancel} {...this.state} />
      </React.Fragment>

    );
  }


}

ItemContainer.defaultProps = {
  loading: "loading..."
};