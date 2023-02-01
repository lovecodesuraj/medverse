import React, { useEffect, useState } from "react";
import { CircularProgress,Paper, Button, Typography } from "@material-ui/core";
import { useNavigate,useLocation } from "react-router-dom";
// import { Pagination } from "@material-ui/lab";
import { useSelector } from "react-redux";
import Question from "./question/question";
import Paginate from "../pagination/Pagination"
import useStyles from './styles';

const useQuery =()=>{
    return new URLSearchParams(useLocation().search);
  }

  const Questions = () => {
    const query=useQuery();
    const page=query.get('page') || 1;
    const searchQuery=query.get('searchQuery');  
    const tags=query.get('tags');
    const classes = useStyles();
    const [activeButton, setActiveButton] = useState("allQuestionsButton");
    const navigate = useNavigate();
    const [sortedBy, setSortedBy] = useState("All");
    const {questions,isLoading} = useSelector((state) => state.questions);
    // const votedQuestions=
    const user = JSON.parse(localStorage.getItem('profile'));
    const [sortedQuestions, setQuestions] = useState([]);

    // console.log(user)
    const unAnswered = (e) => {
        //  console.log(e.target.className);
        setSortedBy("Unswered");
        setActiveButton("unAnsweredQuestionsButton")
        //  e.target.className=`${e.target.className} activeButton `
        setQuestions(questions.filter(question => question.answers.length === 0))
    }
    const votedByYou = () => {
        setSortedBy("Voted"); 
        setActiveButton("votedByMeQuestionsButton")

        setQuestions(questions.filter(question => question.likes.find(like => like === user?.result?.sub || like === user?.result?._id)));
        //  console.log(questions)   
    }
    const myQuestions = () => {
        setSortedBy("Your");
        setActiveButton("myQuestionsButton")
        setQuestions(questions.filter(question => question.creator === user?.result?.sub || question.creator === user?.result._id));
    }
    const all = () => {
        setSortedBy("All");
        setActiveButton("allQuestionsButton")
        setQuestions(questions);
    }
    return <>
        <div className={classes.questionsWrapper}>
            <div className={classes.header}>
                <div className={classes.upperHeader}>
                    <Typography varaint="h4" className={classes.sortedBy}>{sortedBy} Questions</Typography>
                    <Button variant="contained" color="primary" className={classes.askButton} onClick={() => { navigate("/questions/ask") }} >Ask Question</Button>
                </div>
                <div className={classes.lowerHeader}>
                    <Typography varaint="h6">{questions?.length} questions</Typography>
                    <div className={classes.sortingButtons}>
                        <Button className={activeButton === 'allQuestionsButton' ? `${classes.active}` : `${classes.sortingButton}`} variant="outlined" onClick={all}>All</Button>
                        <Button className={activeButton === 'myQuestionsButton' ? `${classes.active} ` : `${classes.sortingButton}`} varaint="outlined" onClick={myQuestions}>Yours</Button>
                        <Button className={activeButton === 'votedByMeQuestionsButton' ? `${classes.active} ` : `${classes.sortingButton}`} varaint="outlined" onClick={votedByYou}>Voted</Button>
                        <Button className={activeButton === 'unAnsweredQuestionsButton' ? `${classes.active} ` : `${classes.sortingButton}`} varaint="outlined" onClick={unAnswered}>Unanswered</Button>
                    </div>
                </div>
            </div>
            <div className={classes.questions}>
                {isLoading? <CircularProgress /> : (!questions ? "No Questions" :(
                    questions.map((question) => <Question key={question._id} question={question} />)
                ))}
            </div>
            {!questions.length && !isLoading ?<div className={classes.noQuestions}></div> : ""}
            {(!searchQuery && !tags?.length) && (<Paper className={classes.pagination} elevation={6}><Paginate page={page}/></Paper>)}
            
        </div>
    </>
}

export default Questions;