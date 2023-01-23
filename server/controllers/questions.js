 import Question from "../models/question.js"
 
 
 export const getQuestions = async (req,res)=>{
   try{
       const questions = await Question.find();
    //    console.log(questions);
       res.status(200).json(questions); 
   }catch(err){
       res.status(404).json({mesage:err.message});
   }
}

export const createQuestion=async (req,res)=>{
      const question=req.body;
      const newQuestion=new Question(question);
      try{
          await newQuestion.save();
          res.status(201).json(newQuestion);
      }catch(err){
          res.status.json({message:err.message});
      }
}