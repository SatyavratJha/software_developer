import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
        </div>
        <div className="about-content">
          <div className="about-text">
            <h3>From Middleware Administration to Software Development</h3>
            <p>
              Six years of comprehensive experience across the software
              development lifecycle, specializing in both UI development and
              middleware administration. Proficient in bridging front-end user
              experience with back-end system reliability
            </p>
            <p>
              Now I'm transitioning back to software development, focusing on
              modern web technologies like React.js, Node.js, and cloud
              platforms. My background gives me a unique perspective on how
              applications interact with infrastructure and middleware
              components.
            </p>
            <p>
              I'm passionate about building scalable, efficient, and
              user-friendly applications that solve real-world problems.
            </p>
          </div>
          <div className="skills">
            <div className="skill-chip">JBoss</div>
            <div className="skill-chip">Redhat MQ</div>
            <div className="skill-chip">React.js</div>
            <div className="skill-chip">Node.js</div>
            <div className="skill-chip">JavaScript</div>
            <div className="skill-chip">HTML/CSS</div>
            <div className="skill-chip">Python/Java</div>
            <div className="skill-chip">Docker</div>
            <div className="skill-chip">Git/GitHub</div>
            <div className="skill-chip">CI/CD</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
// <div className="skill-chip">Redhat Http</div>
//             <div className="skill-chip">Tomcat</div>
