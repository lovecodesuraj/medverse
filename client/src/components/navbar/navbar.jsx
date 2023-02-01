import React, { useEffect, useState } from "react";
import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";
import useStyles from "./styles";
import { Link } from "react-router-dom";
import {useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import  healthcare from "./plus-22.jpg";
const Navbar = () => {
    const [user,setUser]=useState(JSON.parse(localStorage.getItem('profile')))
    const classes = useStyles();
    const dispatch=useDispatch();
   const navigate=useNavigate();
   const location=useLocation();
    const logout=()=>{
        dispatch({type:"LOGOUT"});
        navigate("/");
        setUser(null);
    }
    useEffect(()=>{
        const token=user?.token;


        setUser(JSON.parse(localStorage.getItem('profile')))
    },[location])
    return <>
        <AppBar className={classes.appBar} position='static' color='inherit'>
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/" variant='h2' align='center' className={classes.heading}>Medverse</Typography>
                <img className={classes.image} src={healthcare} alt="icon" height="60" />
            </div>
            <Toolbar className={classes.toolbar}>
                
                {user ?
                (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.picture}>{user.result.name.charAt(0)}</Avatar>
                        <Typography variant="h6" className={classes.userName}>{user.result.name}</Typography>
                        <Button className={classes.logout} color="secondary" variant="contained" onClick={logout}>Logout</Button>
                    </div>
                ):
                (
                    <Button variant="contained" color="primary" component={Link} to="/auth">Sign In</Button>
                ) }
            </Toolbar>
        </AppBar>
    </>
}

export default Navbar