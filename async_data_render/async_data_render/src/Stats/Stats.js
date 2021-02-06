import React, {useEffect,useState} from 'react'; 
import PropTypes from 'prop-types';
import Chart from '../Chart/Chart'
import ErrorBound from '../ErrorBound/ErrorBound'; 
import axios from 'axios'; 


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
  const [loading, setLoading] = useState(false);
  const [asyncData, setAsyncData] = useState([]);


  useEffect( () => {  
    setLoading(true);

    axios.get('https://randomuser.me/api/').then( (val)=>{
      setAsyncData(val.data.results[0].dob.age); 
    }).catch((err)=>{
      console.error(err)
    })

    setLoading(false);

    // return ()=>{
    // }

  }, []); 

  return(
    <ErrorBound loading={loading} asyncData={asyncData}>
      <Chart asyncData={asyncData}></Chart>
    </ErrorBound>

  )
}

export default Stats; 