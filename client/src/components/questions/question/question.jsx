import React, { useState } from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography ,TextField} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"
import { updateQuestion } from "../../../actions/questions";
import { useDispatch } from "react-redux";
import momemt from "moment"
import useStyles from "./styles"
const Question = (props) => {
   const question = props.question;
   const [updatedQuestion, setUpdatedQuestion] = useState(question);
   const [answer,setAnswer]=useState("");
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
            <Typography variant="h6" gutterBottom>{question.question.question}</Typography>
         </CardContent>
         <CardMedia image={question.question.files[0]} className={classes.media} />
         <div className={classes.details}>
            <Typography variant="body2" color="textSecondary">{question.tags.map((tag) => `#${tag}`)}</Typography>
         </div>
         <CardActions className={classes.cardActions}>
            <Button size="small" color="primary" onClick={(e) => {
               setUpdatedQuestion({
                  ...updatedQuestion,
                  votes:updatedQuestion.votes + 1
               })
               update();
            }} >  
            {`Votes ${updatedQuestion.votes}`}
            </Button>
         </CardActions>
         <CardContent>
            <Typography variant="body2">{`${question.answers.length} Answers`}</Typography>
            <div className="answers">
               {question.answers.map(answer => <CardContent>
                  <Typography variant="h6" gutterBottom>{answer}</Typography>
               </CardContent>)}
            </div>
         </CardContent>
         <CardContent>
            <form onSubmit={async(e)=>{
                e.preventDefault();
                setUpdatedQuestion({
                  ...updatedQuestion,
                  answers:updatedQuestion.answers.push(answer)
                })
                const response=await update();
                setAnswer("");
            }}>
            <TextField name="answer" variant="outlined" label="Add answer" value={answer} fullWidth  onChange={(e)=>{setAnswer(e.target.value)}} />
            <Button className={classes.buttonSubmit} type="submit" color="primary" variant="contained" size="large" fullWidth >Add Answer</Button>
            </form>
         </CardContent>
      </Card>


   </>
}

export default Question