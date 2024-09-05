import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import './Footer.css'; // Make sure to create this CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="row col-12">
        <div className="footer-content">
          <div className="footer-left">
            <a href="/">
              <div className="footer-logo">
                <img style={{ height: 50, width: 50 }} src="assets/img/logo.png" alt="Company Logo" />
                <div className="logo-text">
                  <h6>REMARKABLY AI</h6>
                  <div className="logo-address">
                    <p>Houston, Texas</p>
                    {/* <p>Chromepet, Chennai</p>*/}
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="footer-center">
            <div className="footer-links">
              <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
              <Link to="/terms-and-conditions" className="footer-link">Terms and Conditions</Link>
            </div>
          </div>
          <div className="footer-center">
            <div className="footer-links">
              <a href="#about" className="footer-link">About Us</a>
              <a href="#contact" className="footer-link">Contact</a>
            </div>
          </div>
          <div className="footer-right st-nav">
            <div className="sp-phone footer-contact">
              <svg viewBox="0 0 513.64 513.64">
                <g>
                  <g>
                    <path d="M499.66,376.96l-71.68-71.68c-25.6-25.6-69.12-15.359-79.36,17.92c-7.68,23.041-33.28,35.841-56.32,30.72c-51.2-12.8-120.32-79.36-133.12-133.12c-7.68-23.041,7.68-48.641,30.72-56.32c33.28-10.24,43.52-53.76,17.92-79.36l-71.68-71.68c-20.48-17.92-51.2-17.92-69.12,0l-48.64,48.64c-48.64,51.2,5.12,186.88,125.44,307.2c120.32,120.32,256,176.641,307.2,125.44l48.64-48.64C517.581,425.6,517.581,394.88,499.66,376.96z" />
                  </g>
                </g>
              </svg>
              <a href="tel:+14379995201">
                <div className="sp-phone-no">+1 437-999-5201</div>
              </a>
            </div>
          </div>
        </div>
        <div className="row col-12 footer-center">
          <div className="text-center">
            <p>2024 © REMARKABLY AI. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
