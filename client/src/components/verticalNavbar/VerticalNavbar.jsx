import React, { useState } from 'react'
import useStyles from "./styles";
import { Paper } from '@mui/material';
import HomeIcon from "@mui/icons-material/Home"
import UsersIcon from "@mui/icons-material/VerifiedUser"
import TagsIcon from "@mui/icons-material/LocalOffer"
import DashBoardIcon from "@mui/icons-material/Dashboard"
import QuestionsIcon from "@mui/icons-material/QuestionAnswer"
import { NavLink } from 'react-router-dom';
const VerticalNavbar = () => {
  const [active, setActive] = useState("home");
  const classes = useStyles();
  const user=JSON.parse(localStorage.getItem('profile'));
  // const {_id}=user;
  return (
    
    <Paper className={classes.toolBar} elevation={6} >
      <NavLink className={classes.item} style={active==='home'?{backgroundColor:"#F1F2F3",borderRight:"4px solid grey", }:{}} to="/" onClick={() => { setActive("home") }} ><HomeIcon /> home</NavLink>
      <NavLink className={classes.item} style={active==='questions'?{backgroundColor:"#F1F2F3",borderRight:"4px solid grey",}:{}} to="/questions" onClick={() => { setActive("questions") }}>  <QuestionsIcon /> questions</NavLink>
      <NavLink className={classes.item} style={active==='tags'?{backgroundColor:"#F1F2F3",borderRight:"4px solid grey",}:{}} to="/tags" onClick={() => { setActive("tags") }}>  <TagsIcon /> tags</NavLink>
      <NavLink className={classes.item} style={active==='users'?{backgroundColor:"#F1F2F3",borderRight:"4px solid grey",}:{}} to="/users" onClick={() => { setActive("users") }}> <UsersIcon /> users</NavLink>
      <NavLink className={classes.item} style={active==='dashboard'?{backgroundColor:"#F1F2F3",borderRight:"4px solid grey",}:{}} to={user?`/dashboard/${user?._id}`:"/auth"}  onClick={() => { setActive("dashboard") }}> <DashBoardIcon /> dashboard</NavLink>
      <NavLink className={classes.item} style={active==='doctor'?{backgroundColor:"#F1F2F3",borderRight:"4px solid grey",}:{}} to={user?`/doctor/`:"/auth"}  onClick={() => { setActive("doctor") }}> <DashBoardIcon /> doctor</NavLink>
    </Paper>
  )
}

export default VerticalNavbar