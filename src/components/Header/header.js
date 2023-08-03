import React from 'react';
import './header.css'

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-brand">
          <span className="company-name">OK Softwares</span>
        </div>
        <ul className="nav-links">
          <li className="nav-item"><a href="#home">Home</a></li>
          <li className="nav-item"><a href="#about">About Us</a></li>
          <li className="nav-item"><a href="#services">Services</a></li>
          <li className="nav-item"><a href="#blog">Blog</a></li>
          <li className="nav-item"><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
