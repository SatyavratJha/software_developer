import React from "react";
import "../styles/Skills.css";

const Skills = () => {
  const skillCategories = [
    {
      title: "Middleware Technologies",
      skills: ["Redhat MQ", "JBoss"],
    },
    {
      title: "Frontend Development",
      skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Responsive Design"],
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express", "Python", "REST APIs", "Java"],
    },
    {
      title: "DevOps & Tools",
      skills: ["Docker", "Git/GitHub", "CI/CD", "Linux", "Bash Scripting"],
    },
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-title">
          <h2>Skills</h2>
        </div>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.title}</h3>
              <div className="skill-list">
                {category.skills.map((skill, i) => (
                  <div key={i} className="skill-item">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
