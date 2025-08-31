import React from "react";
import "../styles/Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Middleware Monitoring Dashboard",
      description:
        "A React-based dashboard for monitoring middleware performance metrics and system health.",
      tags: ["React", "Node.js", "WebSocket", "Chart.js"],
      status: "In Progress",
    },
    {
      title: "API Gateway Configuration Manager",
      description:
        "A tool to simplify configuration management for API gateways with a user-friendly interface.",
      tags: ["React", "Express", "MongoDB", "Docker"],
      status: "Planning",
    },
    {
      title: "DevOps Automation Scripts",
      description:
        "Collection of automation scripts for middleware deployment and management tasks.",
      tags: ["Python", "Bash", "CI/CD", "Linux"],
      status: "Completed",
    },
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-title">
          <h2>Projects</h2>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
                <span
                  className={`project-status ${project.status
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  {project.status}
                </span>
              </div>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="project-actions">
                <button
                  className="btn btn-primary"
                  disabled={project.status !== "Completed"}
                >
                  View Details
                </button>
                <button
                  className="btn btn-outline"
                  disabled={project.status === "Planning"}
                >
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="projects-note">
          <p>More projects coming soon as I continue my development journey!</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
