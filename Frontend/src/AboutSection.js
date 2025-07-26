import React from "react";
import "aos/dist/aos.css";

const AboutSection = () => {
  return (
    <section className="about-section" id="about" data-aos="fade-up">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p
          className="about-description"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          I'm a passionate Full stack developer skilled in React, JavaScript,
          HTML, CSS, Nodejs, Expressjs, and MongoDB. I love creating stylish and
          user-friendly web applications with smooth UX.
        </p>

        <div className="skills-grid" data-aos="zoom-in-up" data-aos-delay="300">
          <div className="skill-card">HTML5</div>
          <div className="skill-card">CSS3</div>
          <div className="skill-card">JavaScript</div>
          <div className="skill-card">React</div>
          <div className="skill-card">TailwindCSS</div>
          <div className="skill-card">DaisyUI</div>
          <div className="skill-card">Bootstrap</div>
          <div className="skill-card">Firebase</div>
          <div className="skill-card">MongoDB</div>
          <div className="skill-card">Nodejs</div>
          <div className="skill-card">Expressjs</div>
          <div className="skill-card">JAVA</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
