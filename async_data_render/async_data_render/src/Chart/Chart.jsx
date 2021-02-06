import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import {
  BarChart, 
  Bar, 
  Cell, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
} from 'recharts';




const Chart = (props) => {

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  const data = [
    {
      name: "API data", uv: 4000, female: 2400, male: 2400,
    },
  ];

  let styles = {
    tooltip: {
      backgroundColor: 'whitesmoke',
      opacity: '0.9'
    }
  }

  const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      return (
        <div className="custom-tooltip" style={styles.tooltip}>
          <p className="label">{`day ${label} : ${payload[0].value} likes`}</p>
          <p className="label">{`day ${label} : ${payload[1].value} likes`}</p>
          <p className="label">{`day ${label} : ${payload[2].value} likes`}</p>
          <p className="desc">Anything you want can be displayed here.</p>
        </div>
      );
    }
    return null;
  };

  const getPath = (x, y, width, height) => `M${x},${y + height}
          C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
          C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
          Z`;


  const TriangleBar = (props) => {
    const {
      fill, x, y, width, height,
    } = props;
  
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <div className='chart-container'>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="female" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
          {
            data.map((entry, index) => (
              <Cell key={`cell-${index}`} />
            ))
          }
        </Bar>
      </BarChart>
    </div>
  )
}

export default Chart; 
