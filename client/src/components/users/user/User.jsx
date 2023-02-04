import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import {getUser} from "../../../actions/users";
import { useParams } from 'react-router-dom';
import { CircularProgress, Container, Typography } from '@material-ui/core';
import useStyles from "./styles"

const User = () => {
    const {id}=useParams();
    const classes=useStyles();
    const dispatch = useDispatch();
    const {user,users,isLoading} = useSelector(state=> state.users);
    useEffect(()=>{
        dispatch(getUser(id));
    },[id]);
   
  return <>
    {isLoading ? <CircularProgress /> : (
      <Container className={classes.mainContainer}>
        <img src={user.picture} alt="" />
        <Typography>{user.name}</Typography>
        <Typography>{user.email}</Typography>
        {/* <Typography>{user.name}</Typography> */}
      </Container>
    )}
  </>
}

export default User