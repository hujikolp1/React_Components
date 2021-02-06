import React, {useEffect,useState} from 'react'; 
import PropTypes from 'prop-types';
import Chart from '../Chart/Chart'
import ErrorBound from '../ErrorBound/ErrorBound'; 


import { 
  Background, 
  Wrapper, 
  TopBar, 
  Logo, 
  Inner, 
  Title, 
  TwoByOne, 
  Navigation, 
  NavLink, 
  List, 
  Footer, 
  FooterLink 
} from './styles';

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


const Stats = ({history}) => {
  const [loading, setLoading] = useState(true);
  const [asyncData, setAsyncData] = useState(true);

  return(
    <ErrorBound loading={loading} asyncData={asyncData}>
      <Chart></Chart>
    </ErrorBound>

  )
}

export default Stats; 