import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useStyles from "./styles"
import SearchBar from './searchbar/searchBar';
import { CircularProgress, Paper, Button, Typography, Container } from "@material-ui/core";
import Question from "../questions/question/question";
import Paginate from "../pagination/Pagination"

const Tags = () => {
    const classes = useStyles();
    const { questions, isLoading } = useSelector(state => state.questions);
    useEffect(() => {

    }, [])

    return <>
        <Container className={classes.mainContainer}>
            <Paper className={classes.questionsWrapper} elevation={6}>
                <SearchBar />
                <div className={classes.questions}>
                    {isLoading ? <Paper className={classes.loading}><CircularProgress /></Paper> : (
                        // questions.map((question) => <Question key={question._id} question={question} />)
                        questions.map((question) => <Question key={question._id} question={question} />)
                    )}
                </div>
            </Paper>

        </Container>
    </>
}

export default Tags