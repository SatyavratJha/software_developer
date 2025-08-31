import React from "react";
import "../styles/Experience.css";

const Experience = () => {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="section-title">
          <h2>Work Experience</h2>
        </div>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>UI Developer | System Engineer</h3>
              <h4>Tata Consultancy Services Ltd.</h4>
              <p>January 2020 - October 2021</p>
              <ul>
                <li>
                  Designed user interfaces using the modern library like
                  React.js and Angular framework along with web technologies.
                </li>
                <li>End-to-end testing of new features built by the team</li>
              </ul>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Middleware Administrator | System Engineer</h3>
              <h4>Tata Consultancy Services Ltd.</h4>
              <p>October 2021 - Present</p>
              <ul>
                <li>
                  Upgraded and patched 50+ JBoss and Red Hat AMQ servers,
                  ensuring security compliance and eliminating vulnerabilities.
                </li>
                <li>
                  Implemented proactive certificate management to prevent
                  service disruptions and eliminate expiration-related outages.
                </li>
                <li>
                  Performed rapid root cause analysis using log diagnostics,
                  reducing outage resolution time (MTTR) by 30%.
                </li>
                <li>
                  Reduced SLA breaches from 10% to 2% by efficiently managing
                  the entire lifecycle of incident and service tickets.
                </li>
                <li>
                  Executed routine server operations, including stop/start,
                  deployment, and JVM tuning to maintain optimal application
                  performance.
                </li>
              </ul>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Transition Back to Development</h3>
              <h4>Self-Study & Projects</h4>
              <p>2022 - Present</p>
              <ul>
                <li>Learning modern web development with React.js</li>
                <li>Building full-stack applications with Node.js</li>
                <li>Implementing CI/CD pipelines with GitHub Actions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
//  <li>
//                   Managed and maintained enterprise middleware infrastructure
//                 </li>
//                 <li>
//                   Implemented automation scripts for deployment and monitoring
//                 </li>
//                 <li>
//                   Collaborated with development teams on application deployment
//                 </li>
