import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok } from 'react-icons/fa';
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2 className="footer-logo">Sagana</h2>

        <p className="footer-text">All rights reserved 2025.</p>

        <div className="social-icons">
          <a href="#" className="icon"><FaFacebookF className="social-icon" /></a>
          <a href="#" className="icon"><FaInstagram className="social-icon" /></a>
          <a href="#" className="icon"><FaLinkedinIn className="social-icon" /></a>
          <a href="#" className="icon"><FaTiktok className="social-icon" /></a>
        </div>
      </div>
    </footer>
  );
}
