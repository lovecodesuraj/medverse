import react, { useState } from 'react'
import { useEffect } from 'react';
import Divider from "@material-ui/core/Divider";
import { Link } from 'react-router-dom';
import { Avatar } from "@material-ui/core"
import moment from 'moment';
import FileBase from "react-file-base64"
import VoteIcon from "@material-ui/icons/FavoriteBorder"
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { CircularProgress, Button, TextField, Paper, Typography, } from '@material-ui/core';
import useStyles from "./styles";
import VotedIcon from "@material-ui/icons/Favorite";
import { addAnswer, addVote } from '../../../actions/questions';
import { getQuestion } from '../../../actions/questions';
const QuestionDetails = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('profile'));
  const [answer, setAnswer] = useState({ answer: "", files: [] })
  const { question, isLoading, addingAnswer } = useSelector(state => state.questions);
  const [fileSStyles, setFilesStyles] = useState({ files: {width: "100%",overflowX: "auto",display: "flex",padding: "10px 0" },file: {height: "70vh"    }})
  const clear = () => { setAnswer({ answer: "", files: [] }) };
  const dispatch = useDispatch();
  const { id } = useParams();
  // window.location.relaod();
  useEffect(() => {
    dispatch(getQuestion(id));
    // window.location.reload();
  }, [id])
  return <>
    {isLoading? <Paper elevation={6} className={classes.loadingPaper}>
      <CircularProgress size="7em" />
    </Paper> :
      <div className={classes.questionWrapper} >
        <div className={classes.question}>
          <Typography variant="h3" className={classes.title}>{question?.title}</Typography>
          <Typography variant="h6" className={classes.details}>{question?.question}</Typography>
          <div className={classes.tags}>
            <Typography variant="body2" color="textSecondary">{question?.tags?.map((tag) => (<span key={tag} className={classes.span}>{tag}</span>))}</Typography>
          </div>
        </div>
        <Paper style={fileSStyles.files} elevation={0} >
          {question.files.map((file, index) => <img key={index} src={file} style={fileSStyles.file} elevation={4} />)}
        </Paper>
        <div className={classes.status}>
          <Typography variant="body2" className={classes.statusElement} >
            {question.votes.find(vote => vote === (user._id))
              ? <VotedIcon onClick={() => { dispatch(addVote({ questionId: question._id, userId: user._id })) }} />
              : <VoteIcon onClick={() => { user ?dispatch(addVote({ questionId: question._id, userId: user._id })) : navigate("/auth") }} />
            }
            {question.votes.length} {question.votes.length === 1 ? "Vote" : "Votes"}</Typography>
          <Typography variant="body2" className={classes.statusElement}>{question.answers.length > 1 ? `${question.answers.length} answers` : `${question.answers.length} answer`}</Typography>
          {/* <Typography variant="body2"></Typography>      */}
        </div>
        <div className={classes.userAndDate}>
          <Avatar className={classes.purple} alt={question?.name} src={question?.picture}>{question?.name?.charAt(0)}</Avatar>
          <Typography variant="body2" className={classes.name} onClick={() => { navigate(`/users/${question.creator}`) }}>{question.name}</Typography>
          <Typography variant="body2" className={classes.name}>{moment(question.createdAt).fromNow()}</Typography>

        </div>
        <div className={classes.answers}>
          <Typography variant="body2" style={{ margin: "20px 0" }}>{`${question.answers.length}`} {question.answers.length === 1 ? "Answer" : "Answers"}</Typography>
          <div>
            {question.answers.map((answer, index) =>
              <Paper className={classes.answer} key={index} elevation={3}>
                <Paper>{answer.answer}</Paper>
                <Paper style={fileSStyles.files} elevation={0} >
                  {answer.files.map((file, index) => <img key={index} src={file} style={fileSStyles.file} elevation={4} />)}
                </Paper>
                <div className={classes.answerDetails}>
                  <Avatar className={classes.purple} alt={answer?.name} src={answer?.picture}>{question?.name?.charAt(0)}</Avatar>
                  <Typography variant="body2" className={classes.name} onClick={(e) => { e.preventDefault(); navigate(`/users/${question.creator}`) }}>{answer.name}</Typography>
                  <Typography variant="body2" className={classes.name}>{moment(answer.createdAt).fromNow()}</Typography>
                </div>
              </Paper>
            )}
          </div>
          <Paper className={classes.addAnswer} >
            <TextField
              name="answer"
              multiline
              variant="outlined"
              label="Answer"
              // style={{height:"100px"}}
              inputProps={{
                style: {
                  height: "150px",
                },
              }}
              fullWidth
              value={answer.answer}
              onChange={(e) =>
                setAnswer({ ...answer, answer: e.target.value })
              }
            />
            <div className={classes.fileInput}>
              <FileBase
                type="file"
                multiple={true}
                onDone={(data) => {
                  var files = [];
                  data.map((data) => {
                    files = [...files, data.base64];
                  });
                  setAnswer({ ...answer, files: files });
                  // console.log(answer);
                }}
              />
            </div>
            <Button
              className={classes.buttonSubmit}
              // type="submit"
              onClick={(e) => { e.preventDefault(); dispatch(addAnswer({ id, answer, creator: user })); clear() }}
              color={addingAnswer ? "secondary" : "primary"}
              variant="contained"
              size="large"
              fullWidth
            >
              {addingAnswer ? <CircularProgress /> : (!user ? "SIGNIN TO ANSWER" : "ADD ANSWER")}
            </Button>

            {/* </form> */}
          </Paper>
        </div>
      </div>
    }
  </>
}

export default QuestionDetails