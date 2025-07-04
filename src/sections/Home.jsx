import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode, SiX } from "react-icons/si";
import profilePic from "../assets/yamini.png";
import StarsCanvas from "../components/StarsCanvas";
import { useEffect, useRef } from "react";
import './Home.css';

const codeLines = [
  "const yamini = {",
  "  fullName: 'Lotla Yamini',",
   "  title: 'B.Tech IT Student @ ADGIPS, Delhi',",
  "  roles: ['Web Developer & Data Analyst','Hackathon Finalist'],",
  "  passion: ['Tech for Social Impact', 'Women Empowerment','Music'],",
  "  email: 'lotlayamini2@gmail.com'",
  "};"
];

const Home = () => {
  const cursorLight = useRef(null);

  useEffect(() => {
    const moveLight = (e) => {
      if (cursorLight.current) {
        cursorLight.current.style.left = `${e.clientX}px`;
        cursorLight.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener("mousemove", moveLight);
    return () => window.removeEventListener("mousemove", moveLight);
  }, []);

  return (
    <section id="home" className="home-section">
      <StarsCanvas motionSpeed={0.0002} />
      <div className="overlay"></div>
      <div className="cursor-light" ref={cursorLight}></div>

      <div className="container-fluid">
        <div className="row g-4 align-items-center justify-content-center px-3 px-md-5">

          {/* LEFT SECTION */}
          <motion.div
            className="col-lg-6 z-2"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="vscode-box p-4 mb-4 hover-glow"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <div className="vscode-header d-flex gap-2 mb-3">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="vscode-code">
                {codeLines.map((line, index) => (
                  <motion.p
                    key={index}
                    className="code-line"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.3 }}
                  >
                    {line}
                  </motion.p>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="about-card p-3 mt-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <h5 className="about-heading mb-2 text-glow">👩‍💻 About Me</h5>
              <p className="about-text">
             Hi, I'm Lotla Yamini — a passionate Web developer and data analyst with a strong foundation in AI and web technologies. I thrive on building impactful, real-world solutions — from intuitive UI/UX experiences to data-driven platforms that empower users. With hands-on experience in full-stack development, AI integration, and social-impact projects, I love turning complex challenges into elegant digital products. Backed by a top-tier academic record and a drive for innovation, I combine creativity, code, and purpose to make technology truly meaningful.


              </p>

            </motion.div>
          </motion.div>

          {/* RIGHT SECTION */}
          <motion.div
            className="col-lg-6 z-2 d-flex flex-column align-items-center"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="editor-container">
              <div className="editor-tab">profile.jsx</div>
              <div className="editor-window">
                <pre>
                  <code>
{`import React from 'react';

const Developer = () => {
  return <h1>Hello, I am Lotla Yamini!</h1>;
};`}
                  </code>
                </pre>
              </div>
            </div>

            <motion.div
              className="image-glow-box mt-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
            >
              <div className="profile-wrapper">
                <div className="avatar-ring">
                  <img src={profilePic} alt="Lotla Yamini" className="profile-pic" />
                </div>
              </div>
            </motion.div>

            <motion.div
              className="typing-line mt-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              Passionate Coder | Web Developer | Data Analyst
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Home;
