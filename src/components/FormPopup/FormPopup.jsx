import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./FormPopup.css";

const FormPopup = ({ course, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    education: "",
    passingYear: "",
    gap: "",
    experience: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_jwegsno", // your EmailJS service ID
        "template_1y1q8lh", // your template ID
        formData,
        "I_a-NC5Vw8276Tavm" // your public key
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("✅ Form submitted successfully!");
               // ✅ Automatically trigger PDF download
        let pdfFile = "";
        if (course === "Web Development") pdfFile = "/pdfs/Communication Development Course.pdf";
        else if (course === "Artificial Intelligence") pdfFile = "/pdfs/Communication Development Course.pdf";

        if (pdfFile) {
          const link = document.createElement("a");
          link.href = pdfFile;
          link.download = pdfFile.split("/").pop(); // downloads with correct name
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
          onClose();
        },
        (error) => {
          console.log("Email sending failed:", error.text);
          alert("❌ Failed to send email. Please try again.");
        }
      );
  };

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <h2>Enroll in {course}</h2>
        <form onSubmit={handleSubmit} className="popup-form">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="contact"
            placeholder="Contact Number"
            value={formData.contact}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="education"
            placeholder="Education (e.g. B.Tech, M.Tech)"
            value={formData.education}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="passingYear"
            placeholder="Passing Year"
            value={formData.passingYear}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="gap"
            placeholder="Any Gap (Yes/No)"
            value={formData.gap}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="experience"
            placeholder="Work Experience (in months/years)"
            value={formData.experience}
            onChange={handleChange}
          />

          <div className="popup-buttons">
            <button type="submit">Submit</button>
            <button type="button" onClick={onClose} className="cancel-btn">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormPopup;
