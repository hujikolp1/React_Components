import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import {
  Loading
} from './styles';

function ErrorBound({ loading, asyncData, ...rest }) {

  return loading 
    ? (<Loading><CircularProgress size={100} /></Loading>) 
    : ( asyncData ? <Route {...rest}/> : <div>failed to get data</div> )

}

export default ErrorBound;