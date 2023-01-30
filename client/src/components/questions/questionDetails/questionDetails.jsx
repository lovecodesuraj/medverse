import React from 'react'
import Divider from "@material-ui/core/Divider";
import moment from 'moment';
import { Typography, } from '@material-ui/core';
import useStyles from "./styles"
const QuestionDetails = (props) => {
  const classes=useStyles();
  const question=props.question;
  return (
    <div className={classes.card}>
        <div className={classes.section}>
          <Typography variant="h3" component="h2">{question.question}</Typography>
          <Typography gutterBottom variant="h6" color="textSecondary" component="h2">{question.tags.map((tag) => `#${tag} `)}</Typography>
          {/* <Typography gutterBottom variant="body1" component="p">{post.message}</Typography> */}
          <Typography variant="h6">Created by: {question.name}</Typography>
          <Typography variant="body1">{moment(question.createdAt).fromNow()}</Typography>
          <Divider style={{ margin: '20px 0' }} />
          <Typography variant="body1"><strong>Realtime Chat - coming soon!</strong></Typography>
          <Divider style={{ margin: '20px 0' }} />
          <Typography variant="body1"><strong>Comments - coming soon!</strong></Typography>
          <Divider style={{ margin: '20px 0' }} />
        </div>
        <div className={classes.imageSection}>
          <img className={classes.media} src={question?.files || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={question.title} />
        </div>
      </div>
  )
}

export default QuestionDetails