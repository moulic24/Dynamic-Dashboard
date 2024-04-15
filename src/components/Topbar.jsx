import React from 'react'
import './Topbar.css';
import { Box, IconButton } from "@mui/material";
import {Switch, Tooltip} from '@mui/material';
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
const Topbar = ({closeMenu,mode,changeMode}) => {
  return (
    <div style={{marginLeft: closeMenu === false ? "262px" : "70px",transition:'0.5s'}}className={mode ? "nav" : "nav-active"}>
       <Tooltip>
       <Switch onClick={changeMode} checked={mode} className='custom-switch'></Switch>
       </Tooltip>
       <Box display="flex" justifyContent="space-between" p={2}>
        <IconButton>
          <NotificationsOutlinedIcon style= {{color : mode? "black" : "white"}} />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon style= {{color : mode? "black" : "white"}}/>
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon style= {{color : mode? "black" : "white"}}/>
        </IconButton>
      </Box>

    </div>
  )
}

export default Topbar
