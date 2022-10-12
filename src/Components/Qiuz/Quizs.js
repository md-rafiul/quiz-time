import React from "react";
import { useLoaderData } from "react-router-dom";
import Questions from "../Questions/Questions";
import "./Quizs.css";

const Quiz = () => {
  const quizData = useLoaderData();
  const { name, questions, total } = quizData.data;
  return (
    <div className="">
      <h1>{name} Quiz</h1>
      <h4>Total questions: {total}</h4>
      <div>
        <Questions questions={questions}></Questions>
      </div>
    </div>
  );
};

export default Quiz;
