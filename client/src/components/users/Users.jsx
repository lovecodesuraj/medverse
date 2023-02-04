import { CircularProgress,Paper, Container, Grid, Typography } from '@material-ui/core'
import React, { useEffect } from 'react'
import moment from 'moment';
import {useDispatch, useSelector} from "react-redux";
import useStyles from "./styles";
import { getUsers } from '../../actions/users';
import { useSearchParams } from 'react-router-dom';
const Users = () => {
  const dispatch=useDispatch();
  const classes=useStyles();
  const { users, isLoading } = useSelector((state) => state.users);
  // console.log(users);
  useEffect(()=>{
        dispatch(getUsers())
  },[dispatch])
  return (
    <Container className={classes.mainContainer}>
       {isLoading || !users.length ? <CircularProgress /> : (
         users.map(user=><Paper elevation={6} className={classes.paper}>
           <img src={user.picture} className={classes.picture} alt="image" />
           <div className="intro">
            <Typography variant='h5' className={classes.name}>{user.name}</Typography>         
            <Typography variant='body2' clasName={classes.email}>{user.email}</Typography>         
            <Typography variant='body2'className={classes.moment}>Joined {moment(user.createdAt).fromNow()}</Typography>         
            </div>
         </Paper>
         ))} 
    </Container>
  )
}

export default Users