import React from 'react';
import './App.css';
import ItemContainer from './ItemContainer'; 
import Bound from './Bound'; 
 

function App() {
  return (
    <React.Fragment>

      <h1>Lifecycle App</h1>
      
      <Bound>
        <ItemContainer loading="App loading ... "></ItemContainer>
      </Bound> 

    </React.Fragment>

  );
}

export default App;
