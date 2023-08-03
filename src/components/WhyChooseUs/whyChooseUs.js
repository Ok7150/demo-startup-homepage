import React from 'react';
import './whyChooseUs.css'

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <h2>Why Choose Us</h2>
      <div className="why-choose-us__grid">
        <div className="why-choose-us__item">
          <i className="fas fa-users"></i>
          <h3>Wide Talent Pool</h3>
          <p>Access to a diverse and vast talent pool of skilled software engineers, product managers, data scientists, etc.</p>
        </div>
        <div className="why-choose-us__item">
          <i className="fas fa-handshake"></i>
          <h3>Custom Matching</h3>
          <p>Advanced algorithms to match companies with the most suitable candidates based on their requirements.</p>
        </div>
        <div className="why-choose-us__item">
          <i className="fas fa-globe"></i>
          <h3>Global Reach</h3>
          <p>Connect with talents and companies from all over the world to find the perfect fit for your team.</p>
        </div>
        <div className="why-choose-us__item">
          <i className="fas fa-comments"></i>
          <h3>24/7 Support</h3>
          <p>Our dedicated support team is available round-the-clock to assist you with any queries or issues.</p>
        </div>
        <div className="why-choose-us__item">
          <i className="fas fa-trophy"></i>
          <h3>Proven Track Record</h3>
          <p>Our platform has successfully placed thousands of candidates in top companies worldwide.</p>
        </div>
        <div className="why-choose-us__item">
          <i className="fas fa-lock"></i>
          <h3>Secure and Confidential</h3>
          <p>Your data and information are treated with utmost confidentiality and security.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
