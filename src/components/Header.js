import React from 'react';
import './Header.css'; // Make sure to create and import this CSS file

const Header = () => {
    return (
        <header className="header">
            <div className="logo-container">
                <img src="path-to-your-logo.png" alt="Logo" className="logo" />
                <h1 className="site-name">Your Site Name</h1>
            </div>
        </header>
    );
};

export default Header;
