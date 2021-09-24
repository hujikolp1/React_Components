import Redux, { Provider } from 'react-redux'; 
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

const messageReducer = (state=[],action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.message]
    default:
      return state 
  }
}

var store = Redux.createStore(messageReducer);

//------------------------------------------



  return (
    <div className="App">
      <header className="App-header">
        redux app in the works 
      </header>
    </div>
  );
}

export default App;
