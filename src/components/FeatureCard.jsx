import React from 'react';

export default function FeatureCard({ icon, alt, title, description }) {
  return (
    <div className="feature-card">
      <img 
        src={`${import.meta.env.BASE_URL}${icon}`} 
        alt={alt} 
        className="feature-icon-img"
      />
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </div>
  );
}
