import React, { useState } from "react";
import { Avatar, Typography } from "@material-ui/core";
// import Moment from 'react-moment';
import { useNavigate } from "react-router-dom";
import moment from "moment";
import {Link} from "react-router-dom"
import { updateQuestion, deleteQuestion } from "../../../actions/questions";
import { useDispatch } from "react-redux";
import momemt from "moment"
import useStyles from "./styles"
const Question = ({question}) => {
   const navigate=useNavigate(); 
   const [updatedQuestion, setUpdatedQuestion] = useState(question);
   const [answer, setAnswer] = useState({
      answer: "",
      files: [String]
   });
   const [showAnswerFiles, setShowAnswerFiles] = useState(false);
   const [showQuestionFiles, setShowQuestionFiles] = useState(false);
   const dispatch = useDispatch();
   const update = () => {
      dispatch(updateQuestion(updatedQuestion._id, updatedQuestion));
   }
   const openQuestion=()=>{navigate(`/questions/${question._id}`)}
   const classes = useStyles();
   return <>
      <div className={classes.questionWrapper} >
         <div className={classes.status}>
            <Typography variant="body2" className={classes.statusElement}>{`${question.likes.length} Votes`} </Typography>
            <Typography variant="body2" className={classes.statusElement}>{question.answers.length > 1 ? `${question.answers.length} answers` : `${question.answers.length} answer`}</Typography>
            {/* <Typography variant="body2"></Typography>      */}
         </div>
         <div className={classes.question}>
            <Typography variant="h3" className={classes.title} onClick={openQuestion}><Link to="/" style={{textDecoration:"none",color:"rgb(10, 149, 255)" }}>{question?.title}</Link></Typography>
            <Typography variant="h6" className={classes.details}>`${question?.question.slice(0,150)}...`</Typography>
            <div className={classes.tags}>
               <Typography variant="body2" color="textSecondary">{question.tags.map((tag) => (<span key={tag} className={classes.span}>{tag}</span>))}</Typography>
              <div className={classes.userAndDate}>
              <Avatar  className={classes.purple} alt={question?.name} src={question?.picture}>{question?.name?.charAt(0)}</Avatar>
               <Typography variant="body2" className={classes.name}>{question.name}</Typography>
               <Typography variant="body2" className={classes.name}>{moment(question.createdAt).fromNow()}</Typography>
                
              </div>
            </div>
         </div>
      </div>
      {/* <Card className={classes.card}>
         <CardContent>
            <Typography variant="h6" className={classes.question} gutterBottom>{question.question}</Typography>
         </CardContent> */}
      {/* <div className={!showQuestionFiles ? classes.files : classes.showfiles} onDoubleClick={(e) => { showQuestionFiles ? setShowQuestionFiles(false) : setShowQuestionFiles(true) }} >
            {question.files.map(file => <CardMedia image={file} className={!showQuestionFiles ? classes.file : classes.showfile} />)}
         </div> */}
      {/* <div className={classes.details}>
            <Typography variant="body2" color="textSecondary">{question.tags.map((tag) => `#${tag}`)}</Typography>
         </div>
         <CardActions className={classes.cardActions}>
            <Button size="small" color="primary" onClick={(e) => {
               setUpdatedQuestion({
                  ...updatedQuestion,
                  votes: updatedQuestion.votes + 1
               })
               update();
            }} >
               {`Votes ${updatedQuestion.votes}`}
            </Button>
         </CardActions> */}
      {/* <CardContent >
            <Typography variant="body2">{`${question.answers.length} Answers`}</Typography>
            <div className="answers">
               {question.answers.map(answer =>
                  <CardContent className={classes.answer}>
                     <Typography variant="body2" color="textSecondary" gutterBottom  >{answer.answer}</Typography>
                     <div className={classes.files} onDoubleClick={(e) => { showAnswerFiles ? setShowAnswerFiles(false) : setShowAnswerFiles(true) }} >
                        {answer.files.map(file => <CardMedia image={file} className={!showAnswerFiles ? classes.ansFile : classes.showAnsFile} />)}
                     </div>
                  </CardContent>

               )}

            </div>
         </CardContent> */}
      {/* <CardContent>
            <form onSubmit={async (e) => {
               e.preventDefault();
               setUpdatedQuestion({
                  ...updatedQuestion,
                  answers: updatedQuestion.answers.push(answer)
               })
               update();
               setAnswer({
                  answer: "",
                  files: []
               });
            }}>
               <TextField name="answer" className={classes.answer} variant="outlined" label="Add answer" value={answer.answer} fullWidth onChange={(e) => { setAnswer({
                  ...answer,
                  answer:e.target.value}) }} />
               <div className={classes.fileInput}>
                  <FileBase type="file" multiple={true} onDone={data => {
                     var files = [];
                     data.map(data => {
                        files = [...files, data.base64];
                     })
                     setAnswer({ ...answer, files: files })
                     // console.log(question)
                  }} />
               </div>
               <Button className={classes.buttonSubmit} type="submit" color="primary" variant="contained" size="large" fullWidth >Add Answer</Button>
            </form>
            <Button 
            onClick={(e)=>{e.preventDefault(); dispatch(deleteQuestion(question._id));
            }}
            className={classes.buttonSubmit} type="button" color="danger" variant="contained" size="large" fullWidth >Delete Question</Button>

         </CardContent> */}
      {/* </Card> */}


   </>
}

export default Question