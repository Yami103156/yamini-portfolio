import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode, SiX } from "react-icons/si";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section text-center text-light">
      <div className="footer-content">
        <p className="footer-motto">
          Crafting with curiosity, coding with creativity 💡
        </p>

        <div className="footer-social-icons d-flex justify-content-center gap-4 mt-3">
          <a href="https://linkedin.com/in/lotla-yamini-4ab597301" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/Yami103156" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://leetcode.com/u/yamiwhocares/" target="_blank" rel="noopener noreferrer"><SiLeetcode /></a>
          <a href="https://x.com/Yamidev103156?t=aQL3XmK5NftLYPcgtwBYJQ&s=08" target="_blank" rel="noopener noreferrer"><SiX /></a>
        </div>

        <p className="mt-3 footer-copy">&copy; {new Date().getFullYear()} Lotla Yamini. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
