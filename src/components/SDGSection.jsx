import React from 'react';
import "../styles/sdg.css"
export default function SDGSection() {
  const sdgCards = [
    {
      number: 1,
      title: 'No Poverty',
      image: '/SAGANA (39) 1.png'
    },
    {
      number: 8,
      title: 'Decent Work and Economic Growth',
      image: '/SAGANA (40) 1.png'
    },
    {
      number: 11,
      title: 'Sustainable Cities and Communities',
      image: '/SDG-11.png'
    }
  ];

  return (
    <section className="sdg-section">
      <div className="sdg-container">
        {/* Decorative shapes - NOW USING IMAGES */}
        <div className="sdg-shapes">
          <img 
            src="/Ellipse 1.png" 
            alt="" 
            className="shape-circle large"
          />
          <img 
            src="/Polygon 2.png" 
            alt="" 
            className="shape-triangle"
          />
          <img 
            src="/Ellipse 3.png" 
            alt="" 
            className="shape-circle medium"
          />
          <img 
            src="/Ellipse 4.png" 
            alt="" 
            className="shape-circle small"
          />
          <img 
            src="/Rectangle 15.png" 
            alt="" 
            className="shape-rectangle"
          />
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
            src="/SAGANA (50) 1.png" 
            alt="Farmers and Community"
            className="farmers-image"
          />
        </div>
      </div>
    </section>
  );
}