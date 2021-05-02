import logo from './logo.svg';
import './App.css';
import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Link, NavLink, Redirect } from "react-router-dom";
import First from "./Components/First";
import Second from "./Components/Second";
import UserHeader from "./Users/UserHeader";
import UserMain from "./Users/UserMain";
import GroupHeader from "./Groups/GroupHeader";
import GroupMain from "./Groups/GroupMain";
import UserSContainer from "./IdComps/UserSContainer";
import UserContainer from "./IdComps/UserContainer";

function App() {
  return (
    <div className="App">

      <Router>
        <section>
          <nav>
            <p>
              <Link to="first">First</Link>
            </p>
            <p>
              <Link to="second">Second</Link>
            </p>
          </nav>
          <section>
            <Route path="/first" component={First} />
            <Route path="/second" component={Second} />
          </section>
        </section>
      </Router>

      <Router>
      <section>
        <nav>
          <NavLink
            exact
            to="/"
            style={{ padding: "0 10px" }}
            activeStyle={{ fontWeight: "bold" }}
          >
            Home
          </NavLink>
          <NavLink
            exact
            to="/Users"
            style={{ padding: "0 10px" }}
            activeStyle={{ fontWeight: "bold" }}
          >
            Users
          </NavLink>
          <NavLink
            exact
            to="/Groups"
            style={{ padding: "0 10px" }}
            activeStyle={{ fontWeight: "bold" }}
          >
            Groups
          </NavLink>
        </nav>
        <header>
          <Route exact path="/" render={() => <h1>Home</h1>} />
          <Route exact path="/Users" component={UserHeader} />
          <Route exact path="/Groups" component={GroupHeader} />
        </header>
        <main>
          <Route exact path="/Users" component={UserMain} />
          <Route exact path="/Groups" component={GroupMain} />
        </main>
      </section>
    </Router>

    <Router>
      <Fragment>
        <Route exact path="/" component={UserSContainer} />
        <Route path="/users/:id" component={UserContainer} />
      </Fragment>
    </Router>
    </div>
  );
}

export default App;
