import React from 'react'; 

class DisplayMessages extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        messages: []
      }
    }
    handleChange = (e) => {
      e.preventDefault();
      let placeholder = e.target.value
      console.log('placeholder => ', placeholder)
      this.setState({input: placeholder})
    }
    submitMessage = () => {
        this.setState({
          input: '', 
        messages: [...this.state.messages, this.state.input]
      });
    }
  
    render() {
      return (
        <div>
          <h2>Type in a new Message:</h2>
          <input onChange={this.handleChange} value={this.state.input} /> 
          <button onClick={this.submitMessage}>Add message</button> 
          <ul>
            {this.state.messages.map((i)=>{
              return <li>{i}</li>
            })}
          </ul>
        </div>
      );
    }
};

export default DisplayMessages; 