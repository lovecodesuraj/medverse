import React, { useEffect, useState } from "react";
import { AppBar, Avatar, Button, Grid, Toolbar, Typography } from "@mui/material";
import useStyles from "./styles";
import { Link } from "react-router-dom";
import {useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Logo from "./Logo";
import SearchBar from "./searchbar/searchBar";
const Navbar = () => {
    const [user,setUser]=useState(JSON.parse(localStorage.getItem('profile')))
    // console.log(user);
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
      <Grid
      container
      md={12}
      direction="row"
      >
    <Grid item md={2}
    >
    <Logo />
    </Grid>
    <Grid item md={3}>
      {/* <Link>About</Link> */}
      {/* <Link>Products</Link> */}
      <Link></Link>
    </Grid>
      </Grid>
    </>
}

export default Navbar