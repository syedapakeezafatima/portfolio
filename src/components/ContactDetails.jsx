import React from 'react';
import './ContactDetails.css';

const ContactDetails = () => {
  return (
    <section className="contact-section">
      <h2 className="section-title">Contact Me</h2>
      <div className="contact-container">
        <div className="contact-item">
          <i className="fas fa-phone-alt contact-icon"></i>
          <a href="ph# 0321-9817297" className="contact-link">ph# 0321-9817297</a>
        </div>
        <div className="contact-item">
          <i className="fas fa-envelope contact-icon"></i>
          <a href="batoolshiza20@gmail.com" className="contact-link">batoolshiza20@gmail.com</a>
        </div>
        <div className="contact-item">
          <i className="fas fa-map-marker-alt contact-icon"></i>
          <p className="contact-text">New Danewal Town Muhammadi Chowk Vehari</p>
        </div>
        <div className="social-links">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f social-icon"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter social-icon"></i>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in social-icon"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram social-icon"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
