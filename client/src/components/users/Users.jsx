import { CircularProgress, Paper, Button, Container, Grid, Typography, TextField } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search"
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./styles";
import { getUsers, getUsersBySearch } from '../../actions/users';
import nouser from "./noUser.png";
import { useSearchParams } from 'react-router-dom';
const Users = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const classes = useStyles();
  const { users, isLoading } = useSelector((state) => state.users);
  const searchUsers = () => {
    if (search.trim()) {
      dispatch(getUsersBySearch(search));
    } else {
      navigate("/users");
    }
  }
  const userProfile = (id) => {
    navigate(`/users/${id}`);
  }
  // console.log(users);
  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])
  return (
    <Container lg={12} >
      <Paper className={classes.mainContainer}>

        <Paper className={classes.searchBar} elevation={8}>
          <TextField value={search} variant="outlined" onChange={(e) => { setSearch(e.target.value) }} label="Search User" />
          <Button onClick={searchUsers} variant="contained" className={classes.searchButton}><SearchIcon /></Button>
        </Paper>
        <Paper className={classes.users}>
          {isLoading ? (<CircularProgress />) : (
            users.map(user => <Paper elevation={6} className={classes.paper}>
              <img src={user.profile?.picture} className={classes.picture} alt="image" />
              <div className="intro">
                <Typography variant='h5' onClick={() => userProfile(user._id)} className={classes.name}>{user.profile.name}</Typography>
                <Typography variant='body2' clasName={classes.email}>{user.email}</Typography>
                <Typography variant='body2' className={classes.moment}>Joined {moment(user.profile?.createdAt).fromNow()}</Typography>
              </div>
            </Paper>
            ))}
          {!users.length && !isLoading ? <div className={classes.noUsers}><img width="100px" src={nouser} alt="" /><Typography variant='body2'>No user found.</Typography></div> : ""}

        </Paper>
      </Paper>
    </Container>
  )
}

export default Users