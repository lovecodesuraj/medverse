import mongoose from "mongoose";

const questionSchema=mongoose.Schema({
    question:{
        question:String,
        file:"",
    },
    creator:String,
    tags:"",
    votes:[],
    answers:[],
    createdAt :{
        type: Date,
        default:new Date(),
    }
});

 const Question = mongoose.model('Question',questionSchema);

 export default Question ;