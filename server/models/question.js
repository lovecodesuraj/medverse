import mongoose from "mongoose";

const questionSchema=mongoose.Schema({
    title :{
        type:String,
        default:""
    },
    question:{
        type:String,
        default:"",
    },
    files:[String],
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