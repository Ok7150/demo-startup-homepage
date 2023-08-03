import React from 'react';
import './featuredJobs.css';

const FeaturedJobs = ({ jobs }) => {
  return (
    <div className="featured-jobs-container">
      <h2>Featured Jobs</h2>
      <div className="job-cards">
        {jobs.map((job) => (
          <div className="job-card" key={job.id}>
            <h3>{job.title}</h3>
            <p>{job.company}</p>
            <p>{job.location}</p>
            <button className="apply-button">Apply Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
