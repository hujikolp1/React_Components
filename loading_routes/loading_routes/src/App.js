import React, { useState, useEffect, Fragment } from 'react';
import './App.css';
import UserContext from './UserContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoadedRoute from './LoadedRoute'; 
import InfoPage from './InfoPage'; 
import StaticPage from './StaticPage'; 

function App() {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(false);

    useEffect( ()=>{

      return () => {
        console.log("cleanup")
      }
    },[])

  return (
    <Fragment>
      <div>
        Load This Always
      </div>
      <Router>

        <UserContext.Provider value={{}}>

          <Switch>
            <Route exact path="/staticPage" component={StaticPage}/>

            <LoadedRoute exact path='/infoPage' loading={loading} user={user} onFailureRedirectToPath="/">
              <InfoPage />
            </LoadedRoute >
          
          </Switch> 

        </UserContext.Provider>

      </Router>
      <nav>
        <ul>
          <li>
            <link to='/staticPage'>
              
            </link>
          </li>
        </ul>
      </nav>
    </Fragment>

  );
}

export default App;
