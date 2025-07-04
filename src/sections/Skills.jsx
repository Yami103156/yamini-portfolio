import React from "react";
import { motion } from "framer-motion";
import StarsCanvas from "../components/StarsCanvas";
import "./Skills.css";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "C++", "JavaScript", "SQL"],
  },
  {
    title: "Web Technologies",
    skills: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "AI / ML",
    skills: ["TensorFlow", "Keras", "Pandas", "NumPy", "OpenCV"],
  },
  {
    title: "Data Analytics",
    skills: ["Excel", "Power BI", "Seaborn", "Matplotlib", "Tableau"],
  },
  {
    title: "Coursework",
    skills: ["DSA", "Operating Systems", "Computer Networks", "DBMS"],
  },
  {
    title: "Web3 Skills",
    skills: ["Ethereum", "Solidity", "Smart Contracts", "Metamask"],
  }
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <StarsCanvas />
      <div className="container py-5">
        <h2 className="text-center mb-5 glowing-title">🚀 Technical Skills</h2>
        <div className="row justify-content-center">
          {skillCategories.map((category, idx) => (
            <div className="col-md-6 col-lg-4 mb-4" key={idx}>
              <div className="skill-card p-4 text-center">
                <h5 className="mb-3">{category.title}</h5>
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 2 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="skill-name"
                      key={index}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
