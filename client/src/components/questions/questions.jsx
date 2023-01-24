import React from "react";
import { CircularProgress, Grid } from "@material-ui/core"
import { useSelector } from "react-redux";
import Question from "./question/question"
import useStyles from './styles';
const Questions = () => {
    const classes=useStyles();
    const questions = useSelector((state) => state.questions);
    // console.log(questions);
    return <>
        { ! questions.length ? <CircularProgress /> : (
            <Grid className={classes.container} container align alignItems="stretch" spacing={3}>
                    {questions.map((question) => (<Grid item key={question._id} xs={12} sm={6}><Question question={question} /></Grid> ))}
            </Grid>
        )}
    </>
}

export default Questions;