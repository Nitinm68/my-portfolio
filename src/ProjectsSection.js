import React, { useState, useEffect } from "react";
import ModalPreview from "./ModalPreview";
import "aos/dist/aos.css";
import axios from "axios";

const ProjectsSection = () => {
  const [projectData, setProjectData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // 🔥 Fetch projects from backend
  useEffect(() => {
  fetch("http://localhost:5000/api/projects")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json(); // Parse JSON from response
    })
    .then((data) => {
      console.log("📦 Projects loaded:", data);
      setProjectData(data); // set state
    })
    .catch((error) => {
      console.error("❌ Error loading projects:", error);
    });
}, []);


  const handleCardClick = (project) => {
  if (project.liveLink) {
    window.open(project.liveLink, "_blank");
  } else {
    alert("❌ Project link not available");
  }
};


  const handleModalClose = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <section className="projects-section" id="projects" data-aos="fade-up">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projectData.map((project) => (
          <div
            className="project-card"
            key={project.id}
            data-aos="zoom-in"
            onClick={() => handleCardClick(project)}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>

      {showModal && (
        <ModalPreview project={selectedProject} onClose={handleModalClose} />
      )}
    </section>
  );
};

export default ProjectsSection;                  