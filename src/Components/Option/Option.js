import React from "react";

const Option = ({ option, ansChecker }) => {
  return (
    <div>
      <button onClick={() => ansChecker(option)}> {option}</button>
    </div>
  );
};

export default Option;
