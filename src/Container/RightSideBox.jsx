import React, { useState } from "react";
import "./RightSideBox.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SendIcon from "@mui/icons-material/Send";
import { TextField } from "@mui/material";

const RightSideBox = () => {
  let [inp, setInp] = useState("");
  return (
    <div className="right-container">
      <QA />
      <div className="input-box">
        <TextField
          id="outlined-basic"
          variant="standard"
          placeholder="Ask restaurant related questions"
          onChange={(e) => setInp(e.target.value)}
          className="res-input"
        />
        <SendIcon className="send-icon" />
      </div>
      <Questions/>
    </div>
  );
};

const QA = () => {
  return (
    <div className="qa-box">
      <h2 className="QA-head">Q & A</h2>
      <div className="qa-body">
        <span className="msg-box">
          <p className="msg-box-content">
            <AccessTimeIcon />
            testline 1
          </p>
          <p className="msg-box-content">
            <AccessTimeIcon />
            test line 2
          </p>
          <p className="msg-box-content">
            <AccessTimeIcon />
            test line 3
          </p>
          <p className="msg-box-content last">
            <AccessTimeIcon />
            test line 4
          </p>
        </span>
        <span>
          <p className="msg-sent">Hi</p>
        </span>
        <br />
        <span>
          <p className="msg-recieve">Hello</p>
        </span>
        <br />
        <span>
          <p className="msg-sent">I want italian food</p>
        </span>
        <br />
        <span>
          {" "}
          <p className="msg-recieve">
            Sure, Italian, Here is the list from our town
          </p>
        </span>
      </div>
    </div>
  );
};

const Questions = () => {
  let questions = [
    "I want to have some food",
    "Do you have any recommendations",
    "Do you have any good local food restaurant",
    "When should I go to restaurant?",
    "Do you have any restaurant open now?",
    "Which one is the closest one from here?",
    "Which one is reasonable?",
    "Which one is open on Monday?",
    "Which one is open on Tuesday?",
  ];
  return (
    <div className="ques-box">
      <h2 className="ques-head">Question Example</h2>
      <span className="questions">
        {questions && questions.map((val,ind)=>(
            <p className="ques" key={ind}>
                <AccessTimeIcon />{val}
            </p>
        ))}
      </span>
    </div>
  );
};
export default RightSideBox;
