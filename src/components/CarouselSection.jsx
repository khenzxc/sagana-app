import React, { useState } from 'react';
import "../styles/carousel.css"

const CarouselSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      id: 1,
      image: "SAGANA (47) 1.png",
      title: "May Ipon, May Siguradong Pagkain!",
      alt: "Fresh vegetables"
    },
    {
      id: 2,
      image: "/SAGANA (48) 1.png",
      title: "Suporta sa Mga Layunin sa Sakahan",
      alt: "Tractor in field"
    },
    {
      id: 3,
      image: "/SAGANA (49) 1.png",
      title: "Matalinong Pagba-budget",
      alt: "Farmer with tablet"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="carousel-section">
      <div className="carousel-container">
        {/* Title */}
        <h2 className="carousel-title">
          Para sa Mas Masaganang Bukas!
        </h2>

        {/* Carousel */}
        <div className="carousel-flex">
          {/* Left Arrow */}
          <button onClick={prevSlide} className="carousel-arrow" aria-label="Previous">
            <svg className="carousel-arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Cards Container */}
          <div className="carousel-cards">
            {[0, 1, 2].map((offset) => {
              const slideIndex = (currentIndex + offset) % slides.length;
              const slide = slides[slideIndex];

              return (
                <div key={slideIndex} className="carousel-card-outer">
                  <div className="carousel-card">
                    {/* Image */}
                    <div className="carousel-image-container">
                      <img src={slide.image} alt={slide.alt} className="carousel-image" />
                    </div>
                    {/* Title */}
                    <div className="carousel-card-title-container">
                      <h3 className="carousel-card-title">{slide.title}</h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Arrow */}
          <button onClick={nextSlide} className="carousel-arrow" aria-label="Next">
            <svg className="carousel-arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarouselSection;
