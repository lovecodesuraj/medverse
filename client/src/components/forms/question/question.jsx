import FileBase from "react-file-base64";
import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { addQuestion } from "../../../actions/questions";
import useStyles from "./styles";

import "./styles.css"
const AddQuestion = () => {
  const classes = useStyles();
  const [submitText, setSubmitText] = useState("ADD YOUR QUESTION");
  const user = JSON.parse(localStorage.getItem("profile"));
  const [question, setQuestion] = useState({
    question: "",
    files: [],
    votes: 0,
    title:"",
    creator: "",
    name: "",
    tags: "",
    name: user?.result?.name,
    picture:user?.result?.picture,

  });
  const [titleValidity,setTitleValidity]=useState(true);
  const isTitleValid=()=>{question?.title?.length < 90 ? setTitleValidity(true):setTitleValidity(false)};
  

  const clear = () => {
    // setCurrentId(0);
    setQuestion({
      title:"",
      question: "",
      files: [],
      creator: "",
      tags: "",
      name: user?.result?.name,
      picture:user?.result?.picture,
    });
  };

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    setQuestion({ ...question, name: user?.name });
    dispatch(addQuestion(question));
  };
  return (
    <>
      <div className={classes.ask}>
        <Typography variant="h2" className={classes.heading}>Ask a public question</Typography>
        <div className={classes.stepsToAskQuestion}>
          <Typography variant="h6">Writing a good question</Typography>
          <Typography variant="h6">
            You’re ready to ask a programming-related question and this form
            will help guide you through the process. Looking to ask a
            non-programming question?{" "}
            <span>
              <a href="https://stackexchange.com/sites#technology">
                See the topics here
              </a>
            </span>{" "}
            to find a relevant site.
          </Typography>
          <div className="steps">
            <ul>
              <li>Summarize your problem in a one-line title.</li>
              <li>Describe your problem in more detail.</li>
              <li>Describe what you tried and what you expected to happen.</li>
              <li>
                Add “tags” which help surface your question to members of the
                community.
              </li>
            </ul>
          </div>
        </div>
        <Paper className={classes.paper}>
        <form
          autoComplete="off"
          noValidate
          className={`${classes.root} ${classes.form}`}
          onSubmit={handleSubmit}
        >
          <TextField
            name="title"
            variant="outlined"
            label="Title"
            fullWidth
            error={!titleValidity}
            helperText={!titleValidity? 'title must be short' : ""}
            value={question.title}
            onChange={(e) =>{
              setQuestion({ ...question, title: e.target.value })
              isTitleValid()}
            }
          />
          <TextField
            name="question"
            multiline
            variant="outlined"
            label="Details"
            // style={{height:"100px"}}
            inputProps={{
              style: {
                height: "150px",
              },
            }}
            fullWidth
            value={question.question}
            onChange={(e) =>
              setQuestion({ ...question, question: e.target.value })
            }
          />
          <TextField
            name="tags"
            variant="outlined"
            label="Tags (Comma seperated)"
            fullWidth
            value={question.tags}
            onChange={(e) =>
              setQuestion({ ...question, tags: e.target.value.split(",") })
            }
          />
          <div className={classes.fileInput}>
            <FileBase
              type="file"
              multiple={true}
              onDone={(data) => {
                var files = [];
                data.map((data) => {
                  files = [...files, data.base64];
                });
                setQuestion({ ...question, files: files });
                console.log(question);
              }}
            />
          </div>
          <Button
            className={classes.buttonSubmit}
            type="submit"
            color="primary"
            disabled={!titleValidity}
            variant="contained"
            size="large"
            fullWidth
          >
            {!user ? "SIGNIN TO ADD QUESTION" : "ADD QUESTION"}
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={clear}
            fullWidth
          >
            Clear
          </Button>
        </form>
      </Paper>
      </div>
     
    </>
  );
};

export default AddQuestion;
