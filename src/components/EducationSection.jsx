import React from 'react';
import './EducationSection.css';

const EducationSection = () => {
  const education = [
    {
      degree: 'Bachelor of Science in Information Technology',
      institution: 'University OF Education',
      year: '2018 - 2022',
      description: 'Specialized in Software Development and Data Science.'
    },
    
     
    
  ];

  return (
    <section className="education-section">
      <h2 className="section-title">Education</h2>
      <div className="education-container">
        {education.map((edu, index) => (
          <div key={index} className="education-item">
            <h3 className="education-degree">{edu.degree}</h3>
            <p className="education-institution">{edu.institution}</p>
            <p className="education-year">{edu.year}</p>
            <p className="education-description">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
