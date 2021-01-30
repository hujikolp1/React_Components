import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [device, setDevice] = React.useState(""); 
  const findDevice = () => {
    let device = 'desktop';
    let mobileDevices = ['iPhone','Android','iPad','Tablet']
    const {userAgent} = navigator;
    mobileDevices.forEach((mobile)=>{
      if(userAgent.includes(mobile)){
        device = 'mobile'
      }
    })
    return device
  }
  useEffect( ()=>{
    let userDevice = findDevice();
    setDevice(userDevice);
    return( ()=>{
      setDevice(""); 
    })
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        You are on: {device}
      </header>
    </div>
  );
}

export default App;
