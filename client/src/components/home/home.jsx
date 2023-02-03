import React from "react";
import { Container, Grow, Grid ,Button ,Paper} from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import Questions from "../questions/questions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import { getQuestions } from "../../actions/questions";
import useStyles from "./styles";
import SearchBar from "../navbar/searchbar/searchBar";

const Home = () => {
  const navigate=useNavigate();
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getQuestions({sortedBy:'all'}));
  }, [dispatch]);

  return (
    <>
      <Grow in>
        <Container >
            <div  >
              <Questions />
            </div>
        </Container>
      </Grow>
    </>
  );
};

export default Home;
