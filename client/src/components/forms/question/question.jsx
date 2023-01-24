import FileBase from "react-file-base64";
import React, { useState } from "react";
import {TextField , Button , Typography,Paper} from "@material-ui/core";
import {useDispatch} from "react-redux";
import { addQuestion } from "../../../actions/questions";
import useStyles from "./styles"
const AddQuestion=()=>{
    const classes=useStyles();
    const [question,setQuestion]=useState({
        question:"",
        files:[],
        creator:"",
        tags:"",
        createdAt:new Date()
    });

    const clear = () => {
        // setCurrentId(0);
        setQuestion({
            question:"",
            files:[],
            creator:"",
            tags:"",
            createdAt:new Date()
        });
      };
    
    const dispatch=useDispatch()
    const handleSubmit =(e)=>{
           e.preventDefault();
           dispatch(addQuestion(question));
    }   
    return<>
    <Paper className={classes.paper}>
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
           <Typography variant="h6">Add Question</Typography>
           <TextField name="question" variant="outlined" label="Question" fullWidth value={question.question} onChange={(e)=>setQuestion({...question,question:e.target.value})} />
           <TextField name="tags" variant="outlined" label="Tags (Comma seprated)" fullWidth value={question.tags} onChange={(e)=>setQuestion({...question,tags:e.target.value})} />
            <div className={classes.fileInput}>
           <FileBase type="file" multiple={true} onDone={data=>{
            var files=[];
            data.map(data=>{
                files=[...files,data.base64];
            })
            setQuestion({...question,files:files})
            console.log(question)

            }}/> 
            </div>
           <Button className={classes.buttonSubmit} type="submit" color="primary" variant="contained" size="large" fullWidth >Add</Button>
           <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
        </form>
    </Paper>
    </>
}

export default AddQuestion