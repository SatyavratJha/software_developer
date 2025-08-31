import React from "react";
import "../styles/Footer.css";
import ProfilePhoto from "../Satyavrat_Jha2.jpg"; // Adjust path if needed

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="social-links">
            <a href="https://github.com/satyavrat" className="social-link">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/satyavrat" className="social-link">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com/satyavrat" className="social-link">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
          <p>
            &copy; 2025 Satyavrat Jha{" "}
            <img
              src={ProfilePhoto}
              alt="Satyavrat Jha"
              className="profile-photo"
            />
            . All rights reserved.
          </p>
          <p>https://satyavratjha.github.io/</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
