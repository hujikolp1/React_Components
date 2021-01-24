import React, { useState, useEffect, Fragment } from 'react';
import './App.css';
import UserContext from './UserContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoadedRoute from './LoadedRoute'; 
import InfoPage from './InfoPage'; 
import StaticPage from './StaticPage'; 
import axios from 'axios'; 

function App() {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(false);
    const [axiosData, setAxiosData] = useState(null); 

    useEffect( ()=>{

      const mockAPI = () => {
      
        return new Promise( (resolve,reject)=>{
          setTimeout( ()=>{
            axios.get("https://randomuser.me/api/").then(res => {

              setAxiosData(res.data.results[0].name.first);
              console.log("mock_api all >>> ", res);
              console.log("mock_api name >>> ", res.data.results[0].name.first); 
              resolve(res);

            });
            setLoading(false);
            setUser(true);       
          },2000)

        })
      }
      mockAPI(); 

      return () => {
        console.log("cleanup")
      }
    },[])

  return (
    <Fragment>
      { loading && !user && <StaticPage></StaticPage> }
      <LoadedRoute loading={loading} user={user} >
        <InfoPage axiosData={axiosData}/>
      </LoadedRoute >
    </Fragment>

  );
}

export default App;
