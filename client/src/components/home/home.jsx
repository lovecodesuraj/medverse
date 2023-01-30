import React from "react";
import { Container, Grow, Grid ,Button ,Paper} from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import Questions from "../questions/questions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getQuestions } from "../../actions/questions";
import useStyles from "./styles";
import SearchBar from "../navbar/searchbar/searchBar";
const Home = () => {
  const navigate=useNavigate();
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getQuestions());
  }, [dispatch]);

  return (
    <>
      <Grow in>
        <Container maxWidth="">
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Questions />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper elevation={6}>
              <Button  fullWidth  variant="contained" color="primary" onClick={()=>{navigate("/questions/ask")}} >Ask Question</Button>
              </Paper>
              <SearchBar />
            <Paper className={classes.pagination} elevation={6}>
              <Pagination />
            </Paper>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </>
  );
};

export default Home;