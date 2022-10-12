import React from "react";
import Option from "../Option/Option";
import "./Options.css";

const Options = ({ options }) => {
  return (
    <div className="options">
      {options.map((option) => (
        <Option option={option}></Option>
      ))}
    </div>
  );
};

export default Options;
