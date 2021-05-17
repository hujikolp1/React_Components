import logo from './logo.svg';
import './App.css';
import React from 'react'; 
import PropTypes from 'prop-types'; 

function App({items}) {
  return (
    <div className="App">
      <text>Render 2 Strings</text>
      
      <ul>
        {items.map(item => {
          return <li key={item}>{item}</li>
        })}
      </ul>
    </div>
  );
}
App.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired
}
export default App;
