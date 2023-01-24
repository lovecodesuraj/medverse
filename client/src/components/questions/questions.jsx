import React from "react";
import { useSelector } from "react-redux";
import Question from "./question/question"
const Questions =()=>{
    const questions=useSelector((state)=>state.questions);
    // console.log(questions);
    return<>
    <div className="questions">

       {questions.map((question)=><Question question={question}  />)}
    </div>
    </>
}

export default Questions;