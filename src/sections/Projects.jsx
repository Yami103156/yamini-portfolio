import React, { useState } from "react";
import { motion } from "framer-motion";
import StarsCanvas from "../components/StarsCanvas";
import "./Projects.css";

// Project preview images
import shaktiImg from "../assets/shakti-preview.png";
import udaanImg from "../assets/udaan-preview.png";
import samadhanImg from "../assets/samadhan-preview.png";

const projectData = [
  {
    id: 1,
    title: "SHAKTI – Women Empowerment Platform",
    image: shaktiImg,
    description: `
🔍 AI-powered platform offering legal help, job guidance, and safety insights.

• 🧠 Legal Chatbot using Gemini API for harassment/domestic violence support.
• 💼 Personalized job listings for women.
• 🗺️ SafeZone Heatmap using FIR, CCTV & streetlight data (Mapbox).

🏆 Top 120 of 400+ teams – IEEE DTU Vihaan 8.0 Hackathon.
🛠️ React.js, Tailwind CSS, Node.js, Gemini API, Mapbox.
    `,
    github: "https://github.com/Yami103156/SHAKTI",
    live: "https://regal-beignet-599456.netlify.app/",
  },
  {
    id: 2,
    title: "UDAAN AI – Career Guidance Platform",
    image: udaanImg,
    description: `
🚀 Full-stack AI platform for career planning and exam prep.

• 🎙️ DRONA – Voice Assistant with LSTM & Gemini API.
• 📊 Roadmap Builder & Budget Forecaster using React Flow.
• 👥 Used by 30+ students in mentorship trials.

🏆 Top 50 finalist – Hack for Impact, IIIT Delhi.
🛠️ React.js, Node.js, FastAPI, Gemini API, Tailwind CSS.
    `,
    github: "https://github.com/Yami103156/UDAAN-AI",
    live: "https://silly-llama-95ac08.netlify.app/",
  },
  {
    id: 3,
    title: "Samadhan – AI Mediation Platform",
    image: samadhanImg,
    description: `
🤝 Multilingual conflict resolution platform.

• 💬 Ask Samadhan – AI Assistant using Azure AI.
• 🧑‍⚖️ Mediator Connect & Multilingual chat.
• 🎙️ Voice navigation + learning modules via Bhashini.

🏆 Top 100 – BhashaBandhu Hackathon (Microsoft + MeitY).
🛠️ React, Tailwind, Node.js, Azure AI, Bhashini APIs.
    `,
    github: "https://github.com/kishan2613/Samadhan",
    live: "https://samadhan-b839.vercel.app/",
  },
];

const Projects = () => {
  const [selectedId, setSelectedId] = useState(null);

  const toggleDescription = (id) => {
    setSelectedId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section className="projects-section" id="projects">
      <StarsCanvas />
      <div className="container py-5">
        <h2 className="text-center glowing-title mb-5">💻 My Projects</h2>
        <div className="row justify-content-center g-4">
          {projectData.map((project) => (
            <motion.div
              key={project.id}
              className="col-12 col-md-6 col-lg-4"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <div className="project-card">
                {/* Laptop preview */}
                <div className="laptop-frame">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                </div>

                <h5 className="mt-3 text-center">{project.title}</h5>

                {/* Description */}
                {selectedId === project.id && (
                  <motion.div
                    className="project-description mt-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <pre>{project.description}</pre>
                    <div className="project-links d-flex justify-content-center gap-3 mt-3 flex-wrap">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-light btn-sm"
                      >
                        GitHub
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-info btn-sm"
                      >
                        Live Demo
                      </a>
                    </div>
                  </motion.div>
                )}

                {/* Toggle button */}
                <div className="text-center mt-3">
                  <button
                    className="btn btn-sm btn-outline-secondary"
                    onClick={() => toggleDescription(project.id)}
                  >
                    {selectedId === project.id ? "Hide Details" : "View Details"}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
