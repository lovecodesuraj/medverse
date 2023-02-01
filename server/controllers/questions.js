import Question from "../models/question.js"
import mongoose from "mongoose";

export const getQuestions = async (req, res) => {
  const {page}=req.query;
  try {
    const LIMIT=8;
    const startIndex=(Number(page)-1)*LIMIT;
    const total=await Question.countDocuments({});
    const questions = await Question.find().sort({_id:-1}).limit(LIMIT).skip(startIndex);
    const numberOfPages=Math.ceil(total/LIMIT);
    // console.log(numberOfPages)
    res.status(200).json({data:questions,currentPage:Number(page) || 1,numberOfPages});

  } catch (err) {
    res.status(404).json({ mesage: err.message });
  }
}

export const getQuestion =async(req,res)=>{
  const {id}=req.params;
  try {
    const question=await Question.findById(id);
    res.status(200).json(question);
  } catch (error) {
    res.status(404).json({message:error.message});
  }
}

export const getQuestionsBySearch=async (req,res)=>{
  const {searchQuery,tags}=req.query;
  try {
      const search=new RegExp(searchQuery,'i');
      const questions=await Question.find({$or :[{title:search},{name:search},{tags:{$in:tags.split(',')}}]});
      res.json({data:questions}); 
  } catch (error) {
     res.json(404).json({message:"error.message"});
  }
}

export const createQuestion = async (req, res) => {
  const body = req.body;
  const newQuestion = new Question({
    title:body.title,
    question: body.question,
    files: body.files,
    creator: req.userId,
    name:body.name,
    picture:body.picture,
    answers: [],
    createdAt:new Date().toISOString(),
    tags: body.tags,
    likes: [],
   });
  try {
    await newQuestion.save();
    res.status(201).json(newQuestion);
  } catch (err) {
    console.log(err);
    res.status(409).json({ message: err.message });
  }
}

export const updateQuestion = async (req, res) => {
  const { id: _id } = req.params;
  const question = req.body;
  // if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No post with that id");
  try {
    const updatedQuestion = await Question.findByIdAndUpdate(_id, question, { new: true })
    res.json(updatedQuestion);
  } catch (err) {
    console.log(err);
  }

}

export const deleteQuestion = async (req,res)=>{
  const {_id}=req.params;
  try{
     await Question.findByIdAndRemove(_id);
     res.json({message : "question deleted successfully"});
  }catch(err){
      console.log(err);
  }
}

export const likeQuestion= async (req,res)=>{
   const {id}=req.params;
   if(!req.userId) return res.status(200).json({message:"Unauthenticated"});
   const question=await Question.findById(id);
   const index=question.likes.findIndex((id)=>id===String(req.userId));
   if(index===-1){
       question.likes.push(req.userId);
   }else{
      question.likes=question.likes.filter((id)=> id !== String(req.userId));
   }
   const updatedQuestion = await Question.findByIdAndUpdate(id,question,{new:true});
   res.json(updateQuestion);
}