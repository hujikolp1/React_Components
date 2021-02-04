import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
// import UserContext from './context/UserContext';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';



import { 
  AreaChart, 
  Area, 
  Bar, 
  CartesianGrid, 
  ComposedChart, 
  Legend, 
  Line, 
  LineChart, 
  Scatter, 
  ScatterChart, 
  Tooltip, 
  XAxis, 
  YAxis, 
  ZAxis 
} from 'recharts';

import ChartMockup from '../StatsDataCharts/index';
import { resolve } from 'path';
import { reject } from 'ramda';
const util = require('util'); 

const Statistics = ( {history} ) => {

  const { user, firebase, setLoading } = React.useContext(UserContext);
  const [hookAccessToken, sethookAccessToken] = React.useState('');
 
  return(
      <React.Fragment>
          Stats wrapper
      </React.Fragment>
  )
  
}

Statistics.propTypes = {
  // post: PropTypes.object.isRequired
};

export default Statistics;