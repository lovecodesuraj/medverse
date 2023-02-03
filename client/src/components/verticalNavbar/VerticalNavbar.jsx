import React, { useState } from 'react'
import useStyles from "./styles";
import { Toolbar,Typography,Paper } from '@material-ui/core';
import HomeIcon from "@material-ui/icons/Home"
import UsersIcon from "@material-ui/icons/VerifiedUser"
import TagsIcon from "@material-ui/icons/LocalOffer"
import QuestionsIcon from "@material-ui/icons/QuestionAnswer"
import {Link} from 'react-router-dom';
const VerticalNavbar = () => {
  const [active,setActive]=useState("home");
  const classes=useStyles();
  return (
    <Toolbar className={classes.toolBar} >
      <Paper elevation={active==="home" ? 6 : 0} className={classes.paper} onClick={()=>{setActive("home")}} >
       <HomeIcon />
      <Link className={classes.item} to="/" >home</Link>
      </Paper>
      <Paper elevation={active==="questions" ? 6 : 0} onClick={()=>{setActive("questions")}} className={classes.paper}>
        <QuestionsIcon />
      <Link className={classes.item} to="/questions" >questions</Link>
      </Paper>
      <Paper elevation={active==="tags" ? 6 : 0} onClick={()=>{setActive("tags")}} className={classes.paper}>
      <TagsIcon />
      <Link className={classes.item} to="/tags" >tags</Link>
      </Paper>
      <Paper elevation={active==="users" ? 6 : 0} onClick={()=>{setActive("users")}} className={classes.paper}>
       <UsersIcon />
      <Link className={classes.item} to="/users" >users</Link>
      </Paper>
    </Toolbar>
  )
}

export default VerticalNavbar