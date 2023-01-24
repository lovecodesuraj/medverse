import FileBase from "react-file-base64";
import React, { useState } from "react";
import {TextField , Button , Typography,Paper} from "@material-ui/core";
import {useDispatch} from "react-redux";
import { addQuestion } from "../../../actions/questions";
const AddQuestion=()=>{
    const [question,setQuestion]=useState({
        question:"",
        file:"",
        creator:"",
        tags:""
    });
    
    const dispatch=useDispatch()
    const handleSubmit =(e)=>{
           e.preventDefault();
           dispatch(addQuestion(question));
    }   
    return<>
    <Paper>
        <form autoComplete="off"  onSubmit={handleSubmit}>
           <Typography variant="h6">Add Question</Typography>
           <TextField name="question" variant="outlined" label="Question" fullWidth value={question.question} onChange={(e)=>setQuestion({...question,question:e.target.value})} />
           <TextField name="tags" variant="outlined" label="Tags" fullWidth value={question.tags} onChange={(e)=>setQuestion({...question,tags:e.target.value})} />
           <FileBase type="file" multiple={false} onDone={({base64})=>setQuestion({...question,file:base64})} /> 
           ,<Button type="submit" color="primary" variant="contained" size="large" fullWidth >Add</Button>
        </form>
    </Paper>
    </>
}

export default AddQuestion