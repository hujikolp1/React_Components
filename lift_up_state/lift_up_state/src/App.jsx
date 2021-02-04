import React, {Fragment, useState} from 'react';
import ChildComp from './ChildComp'; 
import './App.css';

function App() {
  const [liftedData, setLiftedData] = useState(0); 

  let handlerFunc = () => {
    console.log("lifting 1")
    setLiftedData(liftedData+1)
  }

  return (
    <Fragment>
      <h1>Parent</h1> 
      <p>Data: {liftedData}</p>
      <br></br><br></br>
      <ChildComp handlerFunc={handlerFunc}>
        <p>Child Comp</p>
      </ChildComp>
    </Fragment>
  );
}

export default App;


























