import mongoose from "mongoose";

const questionSchema=mongoose.Schema({
    question:{
        question:String,
        files:[String],
    },
    creator:String,
    createdAt:String,
    answers:[{
        answer:String,
        files:[],
    }],
    tags: [String],
    likes: [String],
});

 const Question = mongoose.model('Question',questionSchema);

 export default Question ;