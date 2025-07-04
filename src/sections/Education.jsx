import React from "react";
import "./Education.css";
import schoolImg from "../assets/school.png";
import interImg from "../assets/inter.png";
import collegeImg from "../assets/college.png";
import StarsCanvas from "../components/StarsCanvas";

const educationData = [
  {
    title: "Class X (CBSE)",
    year: "2020 – 2021",
    school: "N.S. Public School ",
    location: "Noida, India",
    score: "Percentage: 98.2%",
    image: schoolImg,
  },
  {
    title: "Class XII(CBSE)",
    year: "2022 – 2023",
    school: "N.S. Public School ",
    location: "Noida, India",
    score: "Percentage: 92.2%",
    image: interImg,
  },
  {
    title: "B.Tech in IT",
    year: "2023 – 2027",
    school: "Dr. Akhilesh Das Gupta Institute Of Professional Studies (GGSIPU)",
    location: "Delhi, India",
    score: "CGPA: 9.529 ",
    image: collegeImg,
  },
];

const Education = () => {
  return (
    <section className="education-section position-relative" id="education">
      <StarsCanvas />
      <h2 className="timeline-heading">🎓 Education Timeline</h2>
      <div className="timeline-container">
        {educationData.map((edu, idx) => (
          <div className="timeline-card" key={idx}>
            <img src={edu.image} alt={edu.title} className="edu-img" />
            <div className="edu-content">
              <h4 className="edu-title">{edu.title}</h4>
              <p className="edu-year">{edu.year}</p>
              <p className="edu-school"><strong>{edu.school}</strong></p>
              <p className="edu-score highlight">{edu.score}</p>
              <p className="edu-location">{edu.location}</p>
            </div>
            {/* Animated glowing connector */}
            {idx < educationData.length - 1 && (
              <div className="connector-wrapper">
                <div className="glow-line" />
                <div className="moving-dot" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
