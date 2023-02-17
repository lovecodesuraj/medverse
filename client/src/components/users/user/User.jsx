import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from "../../../actions/users";
import { useParams } from 'react-router-dom';
import { CircularProgress, Container, Paper, Typography } from '@material-ui/core';
import useStyles from "./styles"

const User = () => {
  const { id } = useParams();
  const classes = useStyles();
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector(state => state.users);
  useEffect(() => {
    dispatch(getUser(id));
  }, [id]);


  return <>
    {isLoading ? <CircularProgress /> : (
      <Container className={classes.mainContainer}>
        <Container className={classes.profile}>
          <Paper className={classes.picture} elevation={6} style={{ backgroundImage: `url("${user.result.profile.picture}")` }}>{console.log("m hun user",user)}</Paper>
          <Container>
            <Typography className={classes.name}>{user?.profile?.name}</Typography>
            <Typography className={classes.status}>{user?.status}</Typography>
            <Typography className={classes.membership}>{user?.createdAt}</Typography>
            <Typography className={classes.activeStatus}>{user?.profile?.activeStatus}</Typography>
            <Typography className={classes.address}>{user?.profile?.address}</Typography>
          </Container>
        </Container>
        <Container className={classes.info}>
          <Paper className={classes.stats}></Paper>
          <Paper className={classes.about}></Paper>
        </Container>
        {/* <Typography>{user.result.name}</Typography> */}
      </Container>
    )}
  </>
}

export default User