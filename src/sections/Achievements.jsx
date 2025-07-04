import React, { useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";

import StarsCanvas from "../components/StarsCanvas";
import "./Achievements.css";

import img1 from "../assets/img1.png";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";

const achievementData = [
  {
    title: "Smart Delhi Ideathon – Theme Winner 🏅",
    image: img1,
    description: "Ranked 2nd in theme out of 1000+ teams. Presented at Vigyan Bhawan & awarded ₹20,000 by LG of Delhi.",
  },
  {
    title: "Pune Agri Hackathon – Finalist 🌾",
    image: img2,
    description: "Selected under Agri Economics track in India’s 1st Agri Hackathon by Department of Agriculture, Maharashtra.",
  },
  {
    title: "Bhasha Bandhu Hackathon – Top 100 🧠",
    image: img3,
    description: "Selected nationally for 'Mediation Awareness' using BHASHINI API. Organized by Govt. of MP & Microsoft.",
  },
  {
    title: "Google Solution Challenge – 2nd Place 🥈",
    image: img4,
    description: "Secured 2nd in internal round. Designed SDG-aligned tech solution; advanced to national level.",
  },
  {
    title: "Execute 4.0 – DTU x SabPaisa – Top 20 ⚙️",
    image: img5,
    description: "Built ML-powered fraud detection model using hybrid probabilistic modeling; reached Top 20 finalists.",
  },
  {
    title: "SheFi Scholar – Season 14 💜",
    image: img6,
    description: "Selected for global Web3 community led by Maggie Love. Learning DeFi, DAOs, NFTs & AI+Web3 convergence.",
  },
];

const Achievements = () => {
  const [modalImg, setModalImg] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section id="achievements" className="achievements-section">
      <StarsCanvas />
      <div className="container py-5">
        <h2 className="glowing-title text-center mb-4">🏆 Achievements & Recognitions</h2>

        <Slider {...settings}>
          {achievementData.map((item, idx) => (
            <motion.div className="px-3" key={idx} whileHover={{ scale: 1.01 }}>
              <div className="achievement-card">
                <div className="image-box">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="img-fluid rounded achievement-img"
                    onClick={() => setModalImg(item.image)}
                  />
                </div>
                <h5 className="fw-bold mt-3">{item.title}</h5>
                <p className="achievement-description mt-2">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </Slider>

        {/* Lightbox Modal */}
        {modalImg && (
          <div className="lightbox" onClick={() => setModalImg(null)}>
            <motion.img
              src={modalImg}
              alt="Achievement Full"
              className="lightbox-img"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Achievements;
