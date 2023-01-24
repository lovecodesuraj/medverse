import React from "react";
import {TextField , Button , Typography,Paper} from "@material-ui/core";

const Question=(props)=>{
    const question=props.question;
    // console.log(question.question)
   return<>
      <paper>
        <div className="question">{question.question.question}</div>
        <img src={question.question.file} alt="" />
      </paper>
   </>
}

export default Question