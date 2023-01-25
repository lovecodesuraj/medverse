import mongoose from "mongoose";

const questionSchema=mongoose.Schema({
    question:{
        question:String,
        files:[String],
    },
    creator:String,
    answers:[{
        answer:String,
        files:[],
    }],
    tags: [String],
    votes: {
        type: Number,
        default: 0,
    },
});

 const Question = mongoose.model('Question',questionSchema);

 export default Question ;