import React, { useState } from "react";
import "../styles/Header.css";
// Import your photo
import ProfilePhoto from "../Satyavrat_Jha2.jpg"; // Adjust path if needed

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <a href="#about" className="logo">
            Satyavrat Jha
            <img
              src={ProfilePhoto}
              alt="Satyavrat Jha"
              className="profile-photo"
            />
            <span>.</span>
          </a>
          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            <li>
              <a href="#about" onClick={() => setMenuOpen(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#experience" onClick={() => setMenuOpen(false)}>
                Experience
              </a>
            </li>
            <li>
              <a href="#skills" onClick={() => setMenuOpen(false)}>
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => setMenuOpen(false)}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
          <div className="menu-btn" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
