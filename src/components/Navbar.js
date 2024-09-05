// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../components/Navbar.css'; // Ensure this file contains the required CSS

function Navbar() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleToggle = () => {
        setIsNavOpen(prevState => !prevState);
    };

    const handleNavClick = () => {
        setIsNavOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (isNavOpen) {
                setIsNavOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isNavOpen]);

    return (
        <header className="st-site-header st-style1 st-sticky-header">
            <div className="st-main-header">
                <div className="container">
                    <div className="st-main-header-in">
                        <div className="st-main-header-left">
                            <div className="headlogo">
                                <img style={{ height: 50, width: 50 }} src="assets/img/logo.png" alt="Logo" />
                                <h6>REMARKABLY AI</h6>
                            </div>
                        </div>
                        <div className="st-main-header-right">
                            <div className="toggle-nav" onClick={handleToggle}>
                                <i className={`fa ${isNavOpen ? 'fa-times' : 'fa-bars'}`} aria-hidden="true"></i>
                            </div>
                            <div className={`st-nav ${isNavOpen ? 'open' : ''}`}>
                                <ul className={`st-nav-list st-onepage-nav ${isNavOpen ? 'open' : ''}`}>
                                    <li><Link to="/" className="st-smooth-move" onClick={handleNavClick}>Home</Link></li>
                                    <li><a href="#about" className="st-smooth-move" onClick={handleNavClick}>About</a></li>
                                    <li><a href="#contact" className="st-smooth-move" onClick={handleNavClick}>Contact</a></li>
                                    <li><a href="#request-demo" className="st-smooth-move" onClick={handleNavClick}>Request Demo</a></li>
                                </ul>
                                <div className="sp-phone">
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
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
