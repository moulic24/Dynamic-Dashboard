import React from 'react'
import {Link} from "react-router-dom";
import { ResponsiveContainer,  AreaChart, Area} from 'recharts';
import { Tooltip } from 'recharts';
import './Areabox.css';
import CountUp from 'react-countup';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  
const Areabox = ({mode}) => {
  return (
    <div className='chartbox'>
    <div className='boxinfo'>
        <div className="title">
        <div className='icon-1' style={{color: mode ? 'black' : 'white'}}> <PeopleAltIcon/> </div>
            <span className='total' style={{color: mode ? 'black' : 'white'}}>Total</span>
            <span className='total' style={{color: mode ? 'black' : 'white'}}>users</span>
        </div>
        <h1 className='bar-h1' style={{color: mode? "black" : "#ffffff"}}> <CountUp start={0} end={994} delay={1}/></h1>
       <b className='bar-view'> <Link to='/' style={{color: mode ? '#17241f' : '#74b49b'}}>View all</Link></b>
    </div>
    <div className='chartinfo'>
        <div className="chart">
        <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={200}
          height={60}
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
            <Tooltip
          contentStyle={{background:"transparent",border:"none"}}
          labelStyle={{display:"none"}}
          position={{x:10,y:50}}
          />
          <Area type="monotone" dataKey="uv" stroke="#74b49b" fill="#74b49b" />
        </AreaChart>
      </ResponsiveContainer>
      
      
        {/* <ResponsiveContainer width="100%" height="100%">
        <LineChart width={300} height={100} data={data}>
          <Tooltip
          contentStyle={{background:"transparent",border:"none"}}
          labelStyle={{display:"none"}}
          position={{x:10,y:50}}
          />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer> */}
        </div>
        <div className="texts">
            <span className='percentage' style={{color: mode ? 'black' : 'white'}}>45% </span>
            <span className='duration' style={{color: mode ? 'black' : 'white'}}>in 2022</span>
        </div>
    </div>
    </div>
  )
}

export default Areabox
