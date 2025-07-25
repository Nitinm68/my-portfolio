import React from "react";
import { Link } from "react-scroll";
import "./PortfolioStyles.css";

const Navbar = () => {
  return (
    <nav className="navbar" id="navbar">
      <div className="navbar-logo">MyPortfolio</div>
      <ul className="navbar-links">
        <li><Link to="home" smooth={true} duration={500} offset={-70}>Home</Link></li>
        <li><Link to="about" smooth={true} duration={500} offset={-70}>About</Link></li>
        <li><Link to="projects" smooth={true} duration={500} offset={-70}>Projects</Link></li>
        <li><Link to="contact" smooth={true} duration={500} offset={-70}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
