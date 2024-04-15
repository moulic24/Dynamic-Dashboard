import React, { useEffect, useState } from "react";
import './Dashboard.css';
import {MyResponsivePie} from './charts/Piechart';
// import {MyResponsiveBar} from './charts/Bargraph';
import Chartbox from "../../components/Chartbox/Chartbox"
import Areabox from "../../components/Areabox/Areabox";
  import Barbox from "../../components/Barbox/Barbox";
import { CircularProgressbar,  buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
 import Barchart from "../../components/Barchart/Barchart";
// import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
//  
import { Box, Typography } from "@mui/material";
import { mockTransactions } from "../../components/data/mockData";
const Dashboard = ({closeMenu,mode}) => {
  // const percentage = 66;  
  // const [state,setState] = useState(0);
  const [percentage,setPercentage] = useState(0);
  useEffect(()=>{
    if(percentage<85){
    setTimeout(()=>{
      setPercentage(percentage+1)
    },100)
  }
  },[percentage])
  return (
     
             <div style={{backgroundColor:mode?'#acd2c3':'#141b2d', marginLeft: closeMenu === false ? "262px" : "70px",transition:'0.5s' }} className="dashboard_main">
           <div className="header">
           <h1 className="dname" style={{color: mode ? "black" : "white", }}>dashboard.</h1>
           </div>
           
  <div className="first-div">
    <div className="boxes">
      <div style={{backgroundColor: mode ? 'white' : '#1F2A40' ,color:mode?'black':'white', boxShadow:mode? '0 3px 7px grey':'', borderRadius: '10px'}}className="box">
               {/* <p className='pnum'style={{fontSize:'20px',color:mode?'#000000':'#ffffff',lineHeight:'25px',margin:'0px', textAlign: 'center'}}>100</p>
               <p className="pname" style={{fontSize:'20px',color:mode?'#000000':'#ffffff',lineHeight:'25px',margin:'0px', textAlign: 'center'}}>Inspected Models</p>
           */}
        
           <Chartbox mode={mode}/>
      </div>
      <div style={{backgroundColor: mode ? 'white' : '#1F2A40', boxShadow:mode? '0 3px 7px grey':'',borderRadius: '10px'}}className="box">
             <Areabox mode={mode}/>
      </div>
             
      <div style={{backgroundColor: mode ? 'white' : '#1F2A40', boxShadow:mode? '0 3px 7px grey':'', borderRadius: '10px'}}className="box  ">
        {/* <div className="circlebar" style= {{width: 100, height: 100 }}> */}
        {/* <div  style= {{width: 200, height: 120 }}> */}
        
<Barchart mode={mode}/>
{/* <Gauge 
  value={75}
  startAngle={-110}
  endAngle={110}
  sx={{
    [`& .${gaugeClasses.valueText}`]: {
      fontSize: 22,
      
      transform: 'translate(0px, 0px)',
    },
  }}
  text={
     ({ value, valueMax }) => `${value} / ${valueMax}`
  }
/>
        </div> */}
      </div>
      <div style={{backgroundColor: mode ? 'white' : '#1F2A40', boxShadow:mode? '0 3px 7px grey':'', borderRadius: '10px'}}className="box">
       <div className="name-bar">
       <h2 style={{color: mode ? 'black' : 'white'}}>Cost</h2>
       <h2 style={{color: mode ? 'black' : 'white'}}>Breakdown</h2>
       <h3 style={{backgroundColor:'#74b49b',lineHeight:'2'}}>Revenue - $73,450</h3>
      
       </div>
        <div className="circlebar" style= {{width: 100, height: 100 }}>
          <CircularProgressbar value={percentage} text={`${percentage}%`} 
          styles={buildStyles({
            strokeLinecap: 'butt',
            
            pathColor: `black, ${percentage / 100})`,
          textColor: '',
          trailColor: 'chartreuse',
          backgroundColor: 'black',})}
          />

        </div>
      </div>
    </div>
    <div className="barmain" style={{backgroundColor: mode ? '#ffffff' : 'transparent'}} >
      <Barbox/>
    </div>
  </div>
    <div className="sec-div">
                <div className="pie" style={{backgroundColor: mode ? 'white' : '#1F2A40'}}  >
                {/* <p style={{fontSize:'20px',color:mode?'#000000':'#ffffff', paddingLeft:'15px',margin: '10px'}}>Detection Status</p> */}
                <b style={{fontSize:'20px',color:mode?'#000000':'#ffffff',  paddingLeft:'15px',}}>Expenses Detection</b>
                <MyResponsivePie/>
               
                </div>
                <div  className="bar" style={{backgroundColor: mode ? "white" : '#1F2A40'}} >
                {/* <p style={{fontSize:'20px',color:mode?'#000000':'#ffffff', paddingLeft:'15px',margin: '5px'}}>Detection Status</p> */}
                {/* <b style={{fontSize:'20px',color:mode?'#000000':'#ffffff', paddingLeft:'15px'}}>Detection Status</b>
                <MyResponsiveBar/> */}
                     <Box className="box-main"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid green`}
            colors="#e0e0e0"
            p="10px"
          >
            <Typography color="#5c8d89" variant="h5" fontWeight="600">
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box className="box-border"
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid #141b2d`}
              p="10px"
            >
              <Box className="box-data">
                <Typography
                  color="#5c8d89"
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color="#5c8d89">
                  {transaction.user}
                </Typography>
              </Box>
              <Box color="#5c8d89">{transaction.date}</Box>
              <Box
                backgroundColor="#e0e0e0"
                p="5px 10px"
                borderRadius="4px"
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
                </div>
            </div>
            
                {/* <Appbar title="Dashboard" changeMode={changeMode} mode={mode}/> */}
      {/* <div className="third">
        <Reports style={{height:'300px',width:'100px'}}/>
      </div> */}
      </div>
      
        
    );
};

export default Dashboard;
