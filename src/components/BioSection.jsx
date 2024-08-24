import React from 'react';
import './BioSection.css';

const BioSection = () => {
  return (
    <section id="bio-section" className="bio-section">
      <div className="bio-container">
        <div className="bio-avatar">
          <img src="/images/poki.jpeg" alt="Profile" />
        </div>
        <div className="bio-content">
          <h2>Hi, I’m Pakeeza </h2>
          <p>
            I’m a passionate web devloper  with over 2 years of experience in digital marketing, content creation, and brand management. I specialize in creating compelling marketing strategies that drive engagement and growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BioSection;
