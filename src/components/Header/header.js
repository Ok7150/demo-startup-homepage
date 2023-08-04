import React from 'react';
import { Link } from 'react-scroll';
import './header.css'
  
const Header = () => {
  return (
    <header className='header'>
      <nav className='navbar'>
      <div className="navbar-brand">
           <span className="company-name">OK Softwares</span>
        </div>
        <ul className='nav-links'>
          <li className="nav-item"><Link to="home" smooth={true} duration={1500}>Home</Link></li>
          <li className="nav-item"><Link to="meet-the-team" smooth={true} duration={1500}>Our Team</Link></li>
          
          <li className="nav-item"><Link to="footer" smooth={true} duration={1500}>Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
