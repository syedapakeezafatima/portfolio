import React from 'react';
import './WorkSamples.css';

const WorkSamples = () => {
  const samples = [
    {
      id: 1,
      title: 'Regresation page',
      description: 'Project created in HTML,CSS .',
      imageUrl: 'public/images/pro.png'
    },
    {
      id: 2,
      title: 'Shopping website ',
      description: 'Project done in HTML,CSS.',
      imageUrl: 'public/images/new.PNG'
    },
    {
      id: 3,
      title: 'Food APP',
      description: 'App created in Andriod Studio.',
      imageUrl: 'public/images/food.webp'
    },
    {
      id: 4,
      title: 'Personal Portfilo',
      description: 'Created in React.js.',
      imageUrl: 'public/images/PO.PNG'
    },
  ];

  return (
    <section className="work-samples">
      <h2 className="section-title">My Work</h2>
      <div className="samples-container">
        {samples.map(sample => (
          <div key={sample.id} className="sample-card">
            <img src={sample.imageUrl} alt={sample.title} className="sample-image" />
            <div className="sample-info">
              <h3 className="sample-title">{sample.title}</h3>
              <p className="sample-description">{sample.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkSamples;
