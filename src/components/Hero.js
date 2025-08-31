import React from "react";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Middleware Admin Transitioning to Software Development</h1>
          <p>
            Six years of comprehensive experience across UI development (1 year)
            and middleware administration (5 years)
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-outline">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
