import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// 🧩 Importing all components
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";
import SocialIcons from "./SocialIcons";
import ThemeToggle from "./ThemeToggle";
import Navbar from "./Navbar";
import "./PortfolioStyles.css";

const App = () => {
  // ✅ AOS + Loader dono yahan andar
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  
    const loader = document.getElementById("loader");
    if (loader) {
      setTimeout(() => {
        loader.style.display = "none";
      }, 2000);
    }
  }, []);
  
  return (
    <div className="app">
    <div id="loader">
  <span className="loader-dot">●</span>
  <span className="loader-dot">●</span>
  <span className="loader-dot">●</span>
</div>

    
      <div id="loader">
        <div className="spinner"></div>
      </div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <SocialIcons />
      <ThemeToggle />
    </div>
  );
};

export default App;
