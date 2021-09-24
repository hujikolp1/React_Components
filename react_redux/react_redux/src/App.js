import { Provider, connect } from 'react-redux'; 
import { createStore } from 'redux';
import DisplayMessages from './components/DisplayMessages';
import './App.css';

function App() {

  //------------------------------------------

  const ADD = 'ADD'; 

  const addMessage = (message) => {
    return {
      type: ADD,
      message: message 
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      submitNewMessage: (message)=>{
        dispatch(addMessage(message))
      }
    }
  }

  const mapStateToProps = (state) => {
    return {
      messages: state
    }
  }

  const messageReducer = (state = [], action) => {
    switch (action.type) {
      case ADD:
        return [
          ...state,
          action.message
        ];
      default:
        return state;
    }
  };

  // create Redux store
  var store = createStore(messageReducer);

  // connect DisplayMessages component
  const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(DisplayMessages)

  
  

//------------------------------------------



  return (
    <div className="App">

      <Provider store={store}>
        <ConnectedComponent></ConnectedComponent> 
      </Provider> 

    </div>
  );
}


export default App;
