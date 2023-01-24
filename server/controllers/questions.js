import express from "express";
import Question from "../models/question.js"
 
 
 export const getQuestions = async (req,res)=>{
   try{
       const questions = await Question.find();
       console.log(questions);
       res.status(200).json(questions); 
   }catch(err){
       res.status(404).json({mesage:err.message});
   }
}


export const createQuestion=async (req,res)=>{
      const body=req.body;

      const newQuestion=new Question({
        question:{
            question:body.question,
            file:body.file
        },
        creator:"",
        tags:body.tags,
        votes:[],
        answers:[],
        // createdAt :{
        //     type: String,
        //     default:new Date()
        // }
    });
      try{
          await newQuestion.save();
          res.status(201).json(newQuestion);
      }catch(err){
        console.log(err);
          res.status(409).json({message:err.message});
      }
}