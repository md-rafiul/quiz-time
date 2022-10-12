import React from "react";
import "./Topic.css";
import { Link } from "react-router-dom";

const Topic = ({ topic }) => {
  const { id, name, logo, total } = topic;
  return (
    <div className="container topic-container bg-dark mb-3 ">
      <img src={logo} alt="" className="t-img"></img>
      <div className="d-flex justify-content-between bg-white align-items-center rounded height-c p-2">
        <h5 className="m-0">{name}</h5>
        <p className="m-0">Total questions: {total}</p>
        <Link
          to={`/topics/${id}`}
          className="text-decoration-none bg-primary p-1 rounded text-white fw-bold start-hover"
        >
          Start practice
        </Link>
      </div>
    </div>
  );
};

export default Topic;
