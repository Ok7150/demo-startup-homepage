import React from 'react';
import './howItWorks.css';

const HowItWorks = () => {
  return (
    <div className="how-it-works-container">
      <h2>How It Works</h2>
      <div className="step">
        <div className="step-icon">Step 1</div>
        <div className="step-content">
          <h3>Post Job Requirements</h3>
          <p>Companies post their job requirements, including job title, skills, and experience level.</p>
        </div>
      </div>
      <div className="step">
        <div className="step-icon">Step 2</div>
        <div className="step-content">
          <h3>Match with Best Candidates</h3>
          <p>Our platform matches the job requirements with the best-fit candidates in our talent pool.</p>
        </div>
      </div>
      <div className="step">
        <div className="step-icon">Step 3</div>
        <div className="step-content">
          <h3>Review and Select</h3>
          <p>Companies review the matched candidates' profiles and select their preferred candidates.</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
