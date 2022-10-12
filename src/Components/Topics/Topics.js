import React from "react";
import { useLoaderData } from "react-router-dom";
import Topic from "../Topic/Topic";

const Topics = () => {
  const topicData = useLoaderData();
  const topics = topicData.data;

  return (
    <div>
      <div>
        <h1 className="fw-bold pt-4">Select topic to start practice</h1>
      </div>
      <div className="topic-grid pt-4">
        {topics.map((topic) => (
          <Topic key={topic.id} topic={topic}></Topic>
        ))}
      </div>
    </div>
  );
};

export default Topics;
