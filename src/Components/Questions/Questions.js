import React from "react";
import "./Questions.css";
import Question from "../Question/Question";

const Questions = ({ questions }) => {
  return (
    <div className=" ">
      <h1>{questions.length}</h1>
      {questions.map((ques) => (
        <Question key={ques.id} ques={ques}></Question>
      ))}
    </div>
  );
};

export default Questions;
