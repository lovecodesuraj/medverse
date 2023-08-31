import { Container, Paper } from '@mui/material'
import { Link } from "react-router-dom"
import React from 'react'
import useStyles from "./styles"
import logo from "./plus-22.jpg";
const Footer = () => {
  const classes = useStyles();
  return (
    <Container className={classes.footer} maxWidth="xl">
      <div className="logo" style={{ display: "flex", gap: "10px" }}>
        <img src={logo} width="20px" height="20px" style={{ borderRadius: "10px" }} />
        <div style={{ margin: "0 10px",gap:"5px", display: "flex", flexDirection: "column" }}>
          <Link to="/" style={{ textDecoration: "none", color: "rgba(255,255,255,0.5)" }}>Medverse</Link>
          <Link to="/questions" style={{ textDecoration: "none", color: "rgba(255,255,255,0.5)" }}>Questions</Link>
          <Link to="/" style={{ textDecoration: "none", color: "rgba(255,255,255,0.5)" }}>Help</Link>
        </div>
      </div>
      {/* <div style={{ display: "flex",gap:"5px", flexDirection: "column" }}>
        <Link to="/" style={{ textDecoration: "none", color: "rgba(255,255,255,0.5)" }}>About</Link>
        <Link to="/" style={{ textDecoration: "none", color: "rgba(255,255,255,0.5)" }}>Contact Us</Link>
        <Link to="/" style={{ textDecoration: "none", color: "rgba(255,255,255,0.5)" }}>Career</Link>
        <Link to="/" style={{ textDecoration: "none", color: "rgba(255,255,255,0.5)" }}>Privacy policy</Link>
      </div>
      <div style={{ display: "flex",gap:"5px", flexDirection: "column" }}>
        <Link to="/" style={{ textDecoration: "none", color: "rgba(255,255,255,0.5)" }}>Blog</Link>
        <Link to="/" style={{ textDecoration: "none", color: "rgba(255,255,255,0.5)" }}>Twitter</Link>
        <Link to="/" style={{ textDecoration: "none", color: "rgba(255,255,255,0.5)" }}>Facebook</Link>
        <Link to="/" style={{ textDecoration: "none", color: "rgba(255,255,255,0.5)" }}>Linkedin</Link>
        <Link to="/" style={{ textDecoration: "none", color: "rgba(255,255,255,0.5)" }}>Instagram</Link>
      </div> */}
      <span>Site design / logo © 2023 Stack Exchange Inc; <br/>user contributions licensed under CC BY-SA. rev 2023.2.17.43248</span>
    </Container>
  )
}

export default Footer