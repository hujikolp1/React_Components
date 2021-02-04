import React from 'react'

class AddClassEvent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {windowWidth: windowWidth};
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleEvent);
    }
  
    componentWillUnmount() {
      // remove from DOM when unmounted.
      window.removeEventListener('resize', this.handleEvent);
    }
  
    handleEvent = (event) => {
        this.setState({windowWidth: window.innerWidth});    
    }
  
    render() {  
      return (
        <>
            <div>Window width: {this.state.windowWidth} </div>
        </>
      );
    }
}

export default AddClassEvent; 