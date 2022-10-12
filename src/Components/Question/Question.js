import React from "react";
import Options from "../Options/Options";
import "./Question.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Questions = ({ ques }) => {
  const { question, options, correctAnswer } = ques;
  console.log(ques);

  const notify = () => toast(correctAnswer);
  const ansChecker = (selectedAnswer) => {
    if (selectedAnswer === correctAnswer) {
      toast("The answer is correct!");
    } else {
      toast("The answer is Wrong!");
    }
  };
  return (
    <div>
      <div className="border border-dark rounded m-2">
        <h3 className="mb-2">{question}</h3>
        <div>
          <Options options={options} ansChecker={ansChecker}></Options>
        </div>
        <div className="d-flex text-center">
          <button onClick={notify} className="show-ans">
            Show Correct answer!
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Questions;
