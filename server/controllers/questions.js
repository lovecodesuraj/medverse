import Question from "../models/question.js"
import mongoose from "mongoose";

export const getQuestions = async (req, res) => {
  try {
    const questions = await Question.find();
    res.status(200).json(questions);
  } catch (err) {
    res.status(404).json({ mesage: err.message });
  }
}


export const createQuestion = async (req, res) => {
  const body = req.body;
  const newQuestion = new Question({
    question: {
      question: body.question,
      files: body.files,
    },
    creator: String,
    answers: [],
    tags: body.tags,
    votes: 0,
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