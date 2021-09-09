import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import './index.css';
import App from './App';
import Echo from "./Echo";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
    <Fragment>
      <Route exact path="/" render={() => <App />} />
      <Route
        exact
        path="/echo/:msg?"
        render={() => (
          <App>
            <Echo />
          </App>
        )}
      />
    </Fragment>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
