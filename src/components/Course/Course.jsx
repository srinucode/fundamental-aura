import React from "react";
import "./Course.css";

const Course = ({ title, content, buttonText, onEnroll }) => {
  return (
    <div className="course-card">
      <h2 className="course-title">{title}</h2>
      <p className="course-content">{content}</p>
      <button className="course-button" onClick={onEnroll}>
        {buttonText}
      </button>
    </div>
  );
};

export default Course;
