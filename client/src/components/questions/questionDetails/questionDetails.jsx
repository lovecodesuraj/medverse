import react from 'react'
import { useEffect } from 'react';
import Divider from "@material-ui/core/Divider";
import moment from 'moment';
import { useDispatch,useSelector } from 'react-redux';
import { useParams,useNavigate } from 'react-router-dom';
import { CircularProgress, Paper, Typography, } from '@material-ui/core';
import useStyles from "./styles";
import { getQuestion } from '../../../actions/questions';
const QuestionDetails = () => {
  const classes=useStyles();
  const navigate=useNavigate();
  const {question,questions,isLoading} = useSelector(state=> state.questions);
  const dispatch=useDispatch();
  const {id}=useParams();
  useEffect(()=>{
    dispatch(getQuestion(id));
},[id])
if(!question) return null;
if(isLoading) return <Paper elevation={6} className={classes.loadingPaper}>
   <CircularProgress size="7em" />
</Paper>
  return (
    <div className={classes.card}>
        <div className={classes.section}>
          <Typography variant="h3" component="h2">{question?.question.slice(0,10)}</Typography>
          <Typography gutterBottom variant="h6" color="textSecondary" component="h2">{question?.tags.map((tag) => `#${tag} `)}</Typography>
          {/* <Typography gutterBottom variant="body1" component="p">{post.message}</Typography> */}
          <Typography variant="h6">Created by: {question?.name}</Typography>
          <Typography variant="body1">{moment(question?.createdAt).fromNow()}</Typography>
          <Divider style={{ margin: '20px 0' }} />
          <Typography variant="body1"><strong>Realtime Chat - coming soon!</strong></Typography>
          <Divider style={{ margin: '20px 0' }} />
          <Typography variant="body1"><strong>Comments - coming soon!</strong></Typography>
          <Divider style={{ margin: '20px 0' }} />
        </div>
        <div className={classes.imageSection}>
         {/* <img  className={classes.media} src={question.files[0]} /> */}
         {question.files.map((file)=><img  className={classes.media} src={file} alt="image" />)}
        </div>
      </div>
  )
}

export default QuestionDetails