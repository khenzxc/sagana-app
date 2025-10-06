import React from 'react';
import "../styles/sdg.css";

export default function SDGSection() {
  const sdgCards = [
    {
      number: 1,
      title: 'No Poverty',
      image: `${import.meta.env.BASE_URL}SAGANA (39) 1.png`
    },
    {
      number: 8,
      title: 'Decent Work and Economic Growth',
      image: `${import.meta.env.BASE_URL}SAGANA (40) 1.png`
    },
    {
      number: 11,
      title: 'Sustainable Cities and Communities',
      image: `${import.meta.env.BASE_URL}SDG-11.png`
    }
  ];

  const decorativeShapes = [
    { src: "Ellipse 1.png", className: "shape-circle large" },
    { src: "Polygon 2.png", className: "shape-triangle" },
    { src: "Ellipse 3.png", className: "shape-circle medium" },
    { src: "Ellipse 4.png", className: "shape-circle small" },
    { src: "Rectangle 15.png", className: "shape-rectangle" }
  ];

  return (
    <section className="sdg-section">
      <div className="sdg-container">
        {/* Decorative shapes */}
        <div className="sdg-shapes">
          {decorativeShapes.map((shape, index) => (
            <img 
              key={index}
              src={`${import.meta.env.BASE_URL}${shape.src}`} 
              alt="" 
              className={shape.className}
            />
          ))}
        </div>

        {/* Content */}
        <div className="sdg-content">
          <p className="sdg-subtitle">Social Development Goals</p>
          <h2 className="sdg-title">
            Shaping the world,<br />
            one step at a time.
          </h2>

          <div className="sdg-cards">
            {sdgCards.map((sdg) => (
              <div key={sdg.number} className="sdg-card">
                <img 
                  src={sdg.image} 
                  alt={`SDG ${sdg.number}: ${sdg.title}`}
                  className="sdg-card-image"
                />
                <div className="sdg-card-body">
                  <p className="sdg-card-label">SDG {sdg.number}:</p>
                  <p className="sdg-card-title">{sdg.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Illustration */}
        <div className="sdg-illustration">
          <img 
            src={`${import.meta.env.BASE_URL}SAGANA (50) 1.png`} 
            alt="Farmers and Community"
            className="farmers-image"
          />
        </div>
      </div>
    </section>
  );
}
