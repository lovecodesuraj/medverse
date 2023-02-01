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
          <Typography variant="h3" component="h2">{question?.question}</Typography>
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
          <img className={classes.media} src={question?.files[0] || 'data:image/jpeg;base64,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'} alt={question?.title} />
        </div>
      </div>
  )
}

export default QuestionDetails