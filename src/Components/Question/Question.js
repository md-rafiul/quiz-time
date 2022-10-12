import React from "react";
import Options from "../Options/Options";
import "./Question.css";

const Questions = ({ ques }) => {
  const { question, options } = ques;
  return (
    <div>
      <div className="border border-dark rounded m-2">
        <h3 className="mb-2">{question}</h3>
        <div>
          <Options options={options}></Options>
        </div>
      </div>
    </div>
  );
};

export default Questions;
