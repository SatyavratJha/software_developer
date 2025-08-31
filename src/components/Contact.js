import React, { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Thank you for your message! I will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-title">
          <h2>Get In Touch</h2>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Talk About Your Project</h3>
            <p>
              I'm currently looking for opportunities in software development
              where I can leverage my middleware experience while growing as a
              developer.
            </p>
            <div className="contact-links">
              <a
                href="mailto:satyavratjha95@gmail.com"
                className="contact-link"
              >
                <i className="fas fa-envelope"></i>
                <span>satyavratjha95@gmail.com</span>
              </a>
              <a href="https://github.com/satyavrat" className="contact-link">
                <i className="fab fa-github"></i>
                <span>https://github.com/SatyavratJha</span>
              </a>
              <a
                href="https://linkedin.com/in/satyavrat"
                className="contact-link"
              >
                <i className="fab fa-linkedin"></i>
                <span>www.linkedin.com/in/satyavrat-jha-07892b98</span>
              </a>
            </div>
          </div>
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  className="form-input"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  className="form-input"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
