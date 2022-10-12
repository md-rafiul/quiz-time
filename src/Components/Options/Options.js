import React from "react";
import Option from "../Option/Option";
import "./Options.css";

const Options = ({ options, ansChecker }) => {
  return (
    <div className="options">
      {options.map((option) => (
        <Option option={option} ansChecker={ansChecker}></Option>
      ))}
    </div>
  );
};

export default Options;
