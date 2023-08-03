import React from 'react';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: contact@example.com</p>
          <p>Phone: +1 123-456-7890</p>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="icon" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="icon" />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Recruitment Startup. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
