import React from "react";
import {Container,AppBar,Typography,Grow,Grid} from "@material-ui/core";
import Questions from "../questions/questions";
import AddQuestion from "../forms/question/question";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getQuestions } from '../../actions/questions';
const Home=()=>{
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getQuestions());
    },[dispatch]);
  
   return(
    <>
       <Grow in>
        <Container maxWidth="">
          <Grid container justify="space-between" alignItems='stretch' spacing={3} >
            <Grid item xs={12} sm={7}>
               <Questions />
            </Grid>
            <Grid item xs={12} sm={4}>
              <AddQuestion />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </>
   )
}

export default Home;