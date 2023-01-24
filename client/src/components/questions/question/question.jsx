import React from "react";
import {Card , CardActions , CardContent , CardMedia ,Button , Typography} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz" 
import momemt from "moment"
import useStyles from "./styles"
const Question=(props)=>{
    const question=props.question;
    const classes=useStyles();
    console.log("this is file array " , question.question.files)
    // console.log(question.question)
   return<>
      <Card className={classes.card}>
         <CardMedia image={question.question.files[0]} className={classes.media}/>
         <div className={classes.overlay}>
            <Typography variant="h6" >tuktuk</Typography>
            {/* <Typography variant="body2" >{moment(question.createdAt).fromNow()}</Typography> */}
         </div>
         <div className={classes.overlay2}>
            <Button size="small" onClick={()=>{}}>
                <MoreHorizIcon fontSize="normal" />
            </Button>
         </div>
         <div className={classes.details}>
            <Typography variant="body2" color="textSecondary">{question.tags.map((tag)=>`#${tag}`)}</Typography>
         </div>
         <CardContent>
            <Typography variant="h5" gutterBottom>{question.question.question}</Typography>
         </CardContent>
         <CardActions className={classes.cardActions}>
            <Button size="small" color="primary"  onClick={()=>{}} >
            <ThumbUpAltIcon>
               Like
               {question.votes.length}
            </ThumbUpAltIcon>
            </Button>
         </CardActions>
      </Card>
 
   </> 
}

export default Question