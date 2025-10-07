import React from "react";
import "./Home.css";
import Course from "../../components/Course/Course";

const Home = () => {
  const handleEnroll = () => {
    alert("You clicked enroll!");
  };

  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to Fundamentals Aura</h1>

        <div className="courses-container">
          <Course
            title="Web Development"
            content="Learn HTML, CSS, and JavaScript from scratch to advanced."
            onEnroll={handleEnroll}
          />
          <Course
            title="Artificial Intelligence"
            content="Understand the core concepts of AI and machine learning."
            onEnroll={handleEnroll}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
