import React from 'react';
import { Redirect, Route } from 'react-router-dom';


function LoadedRoute({ loading, user, onFailureRedirectToPath, ...rest }) {

  return ( 
      loading ? 
      (<div> ... ... ... </div>) : 
      ( user ? <Route {...rest} /> : (<Redirect to={onFailureRedirectToPath} />) )
  )
}

export default LoadedRoute;