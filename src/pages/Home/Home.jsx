import React, { useState } from "react";
import "./Home.css";
import Course from "../../components/Course/Course";
import FormPopup from "../../components/FormPopup/FormPopup";

const Home = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  // called when user clicks "Know More"
  const handleEnroll = (courseTitle) => {
    setSelectedCourse(courseTitle);
  };

  // close popup
  const closeForm = () => {
    setSelectedCourse(null);
  };

  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to Fundamentals Aura</h1>

        <div className="courses-container">
          <Course
            title="Complete Communication"
            content="A full-spectrum communication course covering theory and practical skills and real-world applications."
            buttonText="Know More"
            onEnroll={() => handleEnroll("Complete Communication Course")}
          />
          <Course
            title="SAP CPI (Cloud Platform Integration)"
            content="Learn how to build, monitor and manage enterprise integration flows using SAP CPI."
            buttonText="Know More"
            onEnroll={() => handleEnroll("SAP CPI (Cloud Platform Integration Course)")}
          />
        </div>

        {/* 🟢 Show popup form only when selectedCourse is set */}
        {selectedCourse && (
          <FormPopup course={selectedCourse} onClose={closeForm} />
        )}
      </div>
    </div>
  );
};

export default Home;
