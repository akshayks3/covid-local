import FilterSection from './FilterSection';

import React from 'react';

const SectionWithFilter = ({title, hotels, onFilterChange}) => (
  <div
    style={{
      marginBottom: '2rem',
      background: '#0f172a',
      border: '1px solid #2a2f45',
      borderRadius: '12px',
      padding: '1.5rem',
    }}
  >
    <h2 style={{color: '#e5e7eb', fontSize: '1.25rem', marginBottom: '1rem'}}>
      {title}
    </h2>
    <FilterSection onFilterChange={onFilterChange} />
    {/* You can add a table or map preview here based on filters */}
  </div>
);

export default SectionWithFilter;
