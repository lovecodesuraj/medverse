import { CircularProgress,Paper, Container, Grid, Typography } from '@material-ui/core'
import React, { useEffect } from 'react'
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
         users.map(user=><Paper elevation={6}>
           <img src={user.picture} alt="image" />

         </Paper>
         ))} 
    </Container>
  )
}

export default Users