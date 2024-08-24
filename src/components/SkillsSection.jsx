import React from 'react';
import './SkillsSection.css';

const SkillsSection = () => {
  const skills = [
    { name: 'HTML', level: 'Expert' },
    { name: 'CSS', level: 'Expert' },
    { name: 'JavaScript', level: 'Advanced' },
    { name: 'React', level: 'Advanced' },
    { name: 'Node.js', level: 'Intermediate' },
    { name: 'Python', level: 'Intermediate' }
  ];

  return (
    <section className="skills-section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <h3 className="skill-name">{skill.name}</h3>
            <p className="skill-level">{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
  
};

export default SkillsSection;
