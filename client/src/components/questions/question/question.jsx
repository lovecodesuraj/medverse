import React, { useState } from "react";
import { Avatar, Typography } from "@mui/material";
import { Paper } from "@mui/material"
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { Link } from "react-router-dom"
import { updateQuestion, deleteQuestion } from "../../../actions/questions";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/DeleteOutline"
import momemt from "moment"
import  "./styles.css"
const Question = ({ question }) => {
   const navigate = useNavigate();
   const [updatedQuestion, setUpdatedQuestion] = useState(question);
   const [answer, setAnswer] = useState({
      answer: "",
      files: [String]
   });
   const user = JSON.parse(localStorage.getItem('profile'));
   const [showAnswerFiles, setShowAnswerFiles] = useState(false);
   const [showQuestionFiles, setShowQuestionFiles] = useState(false);
   const dispatch = useDispatch();
   const { deleting } = useSelector(state => state.questions);
   const update = () => {
      dispatch(updateQuestion(updatedQuestion._id, updatedQuestion));
   }
   const deleteThis = () => {
      dispatch(deleteQuestion(question._id));
   }
   const openQuestion = () => { navigate(`/questions/${question._id}`) }
   return <>
      <div className="questionWrapper" >
         <div className="status">
            <Typography variant="body2" className="statusElement">{question.votes.length} {question.votes.length === 1 ? "vote" : "votes"}</Typography>
            <Typography variant="body2" className="statusElement">{question.answers.length > 1 ? `${question.answers.length} answers` : `${question.answers.length} answer`}</Typography>
            {/* <Typography variant="body2"></Typography>      */}
         </div>
         <div className="question">
            <Typography variant="body2" className="title" onClick={openQuestion}><Link to="/" style={{ textDecoration: "none", color: "rgb(10, 149, 255)" }}>{question?.title.slice(0, 70)}...</Link></Typography>
            <Typography variant="body2" className="details">{question?.question.slice(0, 150)}...</Typography>
            <div className="tags">
               <Typography variant="body2" color="textSecondary">{question.tags.map((tag) => (<span key={tag} className="span">{tag}</span>))}</Typography>
            <div className="userAndDate">
               <Avatar  className="purple" alt={question?.name} src={question?.picture}>{question?.name?.charAt(0)}</Avatar>
               <Typography variant="body2" className="name" style={{ cursor: "pointer" }} onClick={() => { navigate(`/users/${question.creator}`) }}>{question.name}</Typography>
               <Typography variant="body2" className="name">{moment(question.createdAt).fromNow()}</Typography>

            </div>
         </div>
         <Paper elevation={0} style={{ display: "flex", justifyContent: "flex-end" }} >
            {question?.creator === user?._id ? <> <DeleteIcon onClick={deleteThis} /> </> : ""}
         </Paper>
      </div>
   </div >
      
   </>
}

export default Question