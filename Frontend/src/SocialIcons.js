// import { useEffect, useState } from "react";
// import axios from "axios";
// import React from "react";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <a
        href="https://github.com/Nitinm68"
        data-tooltip="GitHub"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/nitin-modanwal"
        data-tooltip="LinkedIn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>
      <a href="tel:+9569601986" data-tooltip="Phone">
        <FaPhone />
      </a>
      <a href="mailto:nitinmodanwal519@gmail.com" data-tooltip="Email">
        <FaEnvelope />
      </a>
      <a
        href="https://www.instagram.com/nitin_m_68"
        data-tooltip="Instagram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram />
      </a>
    </div>
  );
};
export default SocialIcons;
