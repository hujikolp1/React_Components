import { Provider } from 'react-redux'; 
import { createStore } from 'redux';
import DisplayMessages from './components/DisplayMessages';
import logo from './logo.svg';
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

const messageReducer = (state=[],action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.message]
    default:
      return state 
  }
}

var store = createStore(messageReducer);

//------------------------------------------



  return (
    <div className="App">

      <Provider store={store}>
        <DisplayMessages></DisplayMessages> 
      </Provider> 

    </div>
  );
}

export default App;
