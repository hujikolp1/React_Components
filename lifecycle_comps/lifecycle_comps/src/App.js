import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import ItemContainer from './ItemContainer'; 
 

function App() {
  return (
    <React.Fragment>
      <h1>Lifecycle</h1>
      <React.Fragment>
        <ItemContainer></ItemContainer>
      </React.Fragment> 
    </React.Fragment>

  );
}

export default App;
