import React from 'react'; 

class DisplayMessages extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: ''
      }
      this.handleChange = this.handleChange.bind(this);
      this.submitMessage = this.submitMessage.bind(this);
    }
    handleChange = (e) => {
      e.preventDefault();
      let placeholder = e.target.value
      console.log('placeholder => ', placeholder)
      this.setState({input: placeholder})
    }
    submitMessage() {
      this.props.submitNewMessage(this.state.input)
      this.setState((state) => ({
        input: ''
      }));
    }
  
    render() {
      return (
        <div>
          <h2>Type in a new Message:</h2>
          <input onChange={this.handleChange} value={this.state.input} /> 
          <button onClick={this.submitMessage}>Add message</button> 
          <ul>
            {this.props.messages.map((msg, id)=>{
              return <li key={id}>{msg}</li>
            })}
          </ul>
        </div>
      );
    }
};

export default DisplayMessages; 