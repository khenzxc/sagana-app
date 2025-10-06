import React from "react";
import "../styles/timeline.css";
import "../styles/CTASection.css";

export default function TimelineSection() {
  return (
    <>
      {/* Timeline Section */}
      <section className="timeline-section">

        {/* Left illustration */}
        <div className="timeline-illustration">
          <img
            src={`${import.meta.env.BASE_URL}Ellipse 2.png`}
            alt="Farmers illustration"
          />
        </div>

        {/* Farmer Images */}
        <img
          src={`${import.meta.env.BASE_URL}SAGANA (51) 1.png`}
          alt="Farmer planting in a rice paddy"
          className="farmer-image-bottom"
        />
        <img
          src={`${import.meta.env.BASE_URL}SAGANA (41) 1.png`}
          alt="Farmer planting in a rice paddy"
          className="farmer-image2-bottom"
        />

        {/* Timeline content */}
        <div className="timeline-content">
          <h2 className="timeline-title">
            <span className="highlight">A Future We Harvest Together.</span>
          </h2>

          {/* 2026 */}
          <div className="timeline-item left">
            <img
              src={`${import.meta.env.BASE_URL}35 2.png`}
              alt="AI Icon"
              className="timeline-icon"
            />
            <div className="timeline-text">
              <h3>2026</h3>
              <p>
                SAGANA will <strong>integrate AI-powered financial guidance</strong>,
                giving farmers and fisherfolk personalized savings tips and secure
                transaction tracking.
              </p>
            </div>
          </div>

          {/* 2027 */}
          <div className="timeline-item right">
            <div className="timeline-text">
              <h3>2027</h3>
              <p>
                SAGANA will <strong>expand with cooperative and marketplace integration</strong>,
                enabling farmers and fisherfolk to directly access suppliers, buyers,
                and digital cooperatives.
              </p>
            </div>
            <img
              src={`${import.meta.env.BASE_URL}36 2.png`}
              alt="Marketplace Icon"
              className="timeline-icon"
            />
          </div>

          {/* 2028 and beyond */}
          <div className="timeline-item left">
            <img
              src={`${import.meta.env.BASE_URL}37 2.png`}
              alt="Growth Icon"
              className="timeline-icon"
            />
            <div className="timeline-text">
              <h3>2028 and Beyond</h3>
              <p>
                SAGANA will grow into a complete decentralized ecosystem,
                <strong> offering blockchain-based savings, microloans, insurance, and more.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero CTA Section */}
      <section className="hero-cta-section">
        <div className="hero-cta-content">
          <h1 className="hero-cta-title">
            Step into the future of harvesting join today!
          </h1>
          <p className="hero-cta-description">
            Turn your hard work into lasting prosperity with secure and
            inclusive financial tools. Join Sagana and be part of a future that
            uplifts every farmer, every harvest, every save.
          </p>
          <button className="hero-cta-button">Grow with Sagana</button>
        </div>

        {/* Farmer Images and Shapes */}
        <div className="hero-cta-images">
          {/* Green dots - FIRST (lowest z-index) */}
          <div className="hero-green-dot hero-dot-1"></div>
          <div className="hero-green-dot hero-dot-2"></div>

          {/* Farmer images - SECOND */}
          <img
            src={`${import.meta.env.BASE_URL}34 1.png`}
            alt="Farmer planting rice"
            className="hero-farmer-image hero-farmer-top"
          />
          <img
            src={`${import.meta.env.BASE_URL}33 1.png`}
            alt="Woman farmer"
            className="hero-farmer-image hero-farmer-bottom"
          />
          <img
            src={`${import.meta.env.BASE_URL}35 3.png`}
            alt="Farmer"
            className="hero-farmer-image hero-farmer-right"
          />

          {/* Yellow Shape - THIRD */}
          <div className="hero-yellow-shape"></div>

          {/* SAGANA HAND IMAGE - LAST (highest z-index, always on top) */}
          <img
            src={`${import.meta.env.BASE_URL}SAGANA (82) 1.png`}
            alt="SAGANA HAND APP"
            className="SAGANA-HAND-image"
          />
        </div>
      </section>
    </>
  );
}