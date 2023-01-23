import mongoose from "mongoose";

const questionSchema=mongoose.Schema({
    question:{
        question:String,
        filrs:[],
    },
    creator:String,
    tags:[],
    votes:[],
    answers:[],
    createdAt :{
        type: Date,
        default:new Date(),
    }
});

 const Question = mongoose.model('Question',questionSchema);

 export default Question ;