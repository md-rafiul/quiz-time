import React from "react";
import "./Questions.css";
import Question from "../Question/Question";

const Questions = ({ questions }) => {
  return (
    <div className=" ">
      {questions.map((ques) => (
        <Question key={ques.id} ques={ques}></Question>
      ))}
    </div>
  );
};

export default Questions;
