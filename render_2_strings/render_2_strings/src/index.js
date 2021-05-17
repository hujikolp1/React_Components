import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactDOMServer from 'react-dom/server';
import express from 'express'; 

const doc = content => 
  `
    <!doctype html>
    <html>
      <head>
        <title>render 2 strings</title>
      </head> 
      <body>
        <div id='app'>${content}</div>
      </body>
    </html>
  `; 

  const app = express(); 

  app.get('/', (req,res) => {
    const props = { items: [1,2,3] };
    const rendered = ReactDOMServer.renderToString(
      <App 
        {...props}
      />
    ); 
    res.send(doc(rendered));
  });

  app.listen(8080, () => {
    console.log('Listening on 127:0:0:1:8080'); 
  });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
