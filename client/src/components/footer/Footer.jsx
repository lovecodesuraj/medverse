import { Container } from '@material-ui/core'
import React from 'react'
import useStyles from "./styles"
const Footer = () => {
    const classes =useStyles();
  return (
    <Container className={classes.footer} maxWidth="xl">
      
    </Container>
  )
}

export default Footer