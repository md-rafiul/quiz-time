import React from "react";
import { useLoaderData } from "react-router-dom";
import "./Quizs.css";

const Quiz = () => {
  const quizData = useLoaderData();
  const { name, questions, total } = quizData.data;
  return (
    <div>
      <h1>{name} Quiz</h1>
      <h4>Total questions: {total}</h4>
    </div>
  );
};

export default Quiz;
