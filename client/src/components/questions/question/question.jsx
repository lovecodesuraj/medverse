import React, { useState } from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography, TextField } from "@material-ui/core";
import FileBase from "react-file-base64";
import { updateQuestion } from "../../../actions/questions";
import { useDispatch } from "react-redux";
import momemt from "moment"
import useStyles from "./styles"
const Question = (props) => {
   const question = props.question;
   const [updatedQuestion, setUpdatedQuestion] = useState(question);
   const [answer, setAnswer] = useState({
      answer: "",
      files: [String]
   });
   const [showAnswerFiles, setShowAnswerFiles] = useState(false);
   const [showQuestionFiles, setShowQuestionFiles] = useState(false);
   // console.log(updatedQuestion);
   const dispatch = useDispatch();
   const update = () => {
      // e.preventDefault();
      dispatch(updateQuestion(updatedQuestion._id, updatedQuestion));
   }
   const classes = useStyles();
   // console.log("this is file array ", question.question.files)
   // console.log(question.question)
   return <>
      <Card className={classes.card}>
         <CardContent>
            <Typography variant="h6" className={classes.question} gutterBottom>{question.question.question}</Typography>
         </CardContent>
         <div className={!showQuestionFiles ? classes.files : classes.showfiles} onDoubleClick={(e) => { showQuestionFiles ? setShowQuestionFiles(false) : setShowQuestionFiles(true) }} >
            {question.question.files.map(file => <CardMedia image={file} className={!showQuestionFiles ? classes.file : classes.showfile} />)}
         </div>
         <div className={classes.details}>
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
         </CardActions>
         <CardContent >
            <Typography variant="body2">{`${question.answers.length} Answers`}</Typography>
            <div className="answers">
               {question.answers.map(answer =>
                  <CardContent className={classes.answer}>
                     <Typography variant="h6" gutterBottom style={{fontSize:"15px",lineHeight:"22px",color:"rgb(30,30,30)",fontFamily:"sans-serif"}} >{answer.answer}</Typography>
                     <div className={classes.files} onDoubleClick={(e) => { showAnswerFiles ? setShowAnswerFiles(false) : setShowAnswerFiles(true) }} >
                        {answer.files.map(file => <CardMedia image={file} className={!showAnswerFiles ? classes.ansFile : classes.showAnsFile} />)}
                     </div>
                  </CardContent>

               )}

            </div>
         </CardContent>
         <CardContent>
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
         </CardContent>
      </Card>


   </>
}

export default Question