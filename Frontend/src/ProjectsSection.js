// import React, { useState, useEffect } from "react";
// import ModalPreview from "./ModalPreview";
// import "aos/dist/aos.css";
// import axios from "axios";

// const ProjectsSection = () => {
//   const [projectData, setProjectData] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedProject, setSelectedProject] = useState(null);

//   // 🔥 Fetch projects from backend
//   useEffect(() => {
//     fetch("https://my-portfolio-gl8a.onrender.com/api/projects")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return response.json(); // Parse JSON from response
//       })
//       .then((data) => {
//         console.log("📦 Projects loaded:", data);
//         setProjectData(data); // set state
//       })
//       .catch((error) => {
//         console.error("❌ Error loading projects:", error);
//       });
//   }, []);

//   const handleCardClick = (project) => {
//     if (project.liveLink) {
//       window.open(project.liveLink, "_blank");
//     } else {
//       alert("❌ Project link not available");
//     }
//   };

//   const handleModalClose = () => {
//     setShowModal(false);
//     setSelectedProject(null);
//   };

//   return (
//     <section className="projects-section" id="projects" data-aos="fade-up">
//       <h2 className="section-title">Projects</h2>
//       <div className="projects-grid">
//         {projectData.map((project) => (
//           <div
//             className="project-card"
//             key={project.id}
//             data-aos="zoom-in"
//             onClick={() => handleCardClick(project)}
//           >
//             <h3>{project.title}</h3>
//             <p>{project.description}</p>
//           </div>
//         ))}
//       </div>

//       {showModal && (
//         <ModalPreview project={selectedProject} onClose={handleModalClose} />
//       )}
//     </section>
//   );
// };

// export default ProjectsSection;

import React, { useState, useEffect } from "react";
import ModalPreview from "./ModalPreview";
import "aos/dist/aos.css";

const ProjectsSection = () => {
  const [projectData, setProjectData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // 🔥 Fetch projects from backend
  useEffect(() => {
    fetch("https://my-portfolio-gl8a.onrender.com/api/projects")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("📦 Projects loaded:", data);
        setProjectData(data);
      })
      .catch((error) => {
        console.error("❌ Error loading projects:", error);
      });
  }, []);

  // ✅ Handle project click
  const handleCardClick = (project) => {
    if (project.liveLink && project.liveLink.trim() !== "") {
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
            className="project-card cursor-pointer"
            key={project.id}
            data-aos="zoom-in"
            onClick={() => handleCardClick(project)}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            {/* ✅ Show link below project card */}
            {project.liveLink && project.liveLink.trim() !== "" ? (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-2 inline-block"
                onClick={(e) => e.stopPropagation()} // stop card click
              >
                Live Demo
              </a>
            ) : (
              <span className="text-gray-400 mt-2 inline-block">
                Link not available
              </span>
            )}
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
