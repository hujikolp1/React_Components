import React from 'react';
import './App.css';
import ItemContainer from './ItemContainer'; 
import Bound from './Bound'; 
import ButtonContainer from './ButtonContainer';

function onClick() {
  this.setState({ disabled: true });
}

function App() {

  return (
    <React.Fragment>

      <h1>Lifecycle App</h1>
      
      <Bound>
        <ItemContainer loading="App loading ... "></ItemContainer>
      </Bound> 

      <section>
        <ButtonContainer label="Click" />
        <ButtonContainer
          label="Button"
          icon="ui-icon-person"
          showLabel={true}
        />
        <ButtonContainer label="Turn Off" onClick={onClick} />
      </section>

    </React.Fragment>

  );
}

export default App;
