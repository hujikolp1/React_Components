class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        message: ''
      };
      this.handleEnter = this.handleEnter.bind(this);
      this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    componentDidMount() {
      document.addEventListener('keydown', this.handleKeyPress)
    }
    componentWillUnmount() {
      document.removeEventListener('keydown', this.handleKeyPress)
    }
    handleEnter() {
      this.setState((state) => ({
        message: state.message + 'KeyDown!'
      }));
    }
    handleKeyPress(event) {
        // Enter Key corresponds to keyCode 13
        // more keyCodes can be found at this cool web tool: https://keycode.info/ 
        if (event.keyCode === 13) {
            this.handleEnter();
        }
    }
    render() {
      return (
        <div>
          <h1>{this.state.message}</h1>
        </div>
      );
    }
  };