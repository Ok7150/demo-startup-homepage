import React from 'react';
import './searchFilters.css'

const SearchFilters = ({ handleSearch, handleFilter }) => {
  return (
    <div className="search-filters">
      
      <p>Search Jobs</p>

      <label htmlFor="job-category">Job Category:</label>
      <select id="job-category" onChange={(e) => handleFilter('category', e.target.value)}>
        <option value="">All</option>
        <option value="software_engineer">Software Engineer</option>
        <option value="product_manager">Product Manager</option>
        <option value="data_scientist">Data Scientist</option>
        <option value="data_scientist">Data Analyst</option>
      </select>
            <br/>
      <label htmlFor="location">Skills:</label>
      <select id="location" onChange={(e) => handleFilter('location', e.target.value)}>
        <option value="C language">C language</option>
        <option value="C++">C++</option>
        <option value="Java">Java</option>
        <option value="Python">Python</option>
        <option value="JavaScript">JavaScript</option>
        <option value="PHP">PHP</option>
        <option value="Excel">Excel</option>
      </select> 
      <br/>
      <label htmlFor="location">Location:</label>
      <select id="location" onChange={(e) => handleFilter('location', e.target.value)}>
        <option value="">All</option>
        <option value="india">India</option>
        <option value="worldwide">Worldwide</option>
      </select>
    </div>
  );
};

export default SearchFilters;
