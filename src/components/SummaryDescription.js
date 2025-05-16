import React from 'react';

const SummaryDescription = ({title, summary = ' '}) => {
  const trimmed =
    summary.length > 800 ? summary.slice(0, 297).trim() + '...' : summary;

  return (
    <div className="summary-description">
      <div className="summary-desc-title">{title}</div>
      <p>{trimmed}</p>
    </div>
  );
};

export default SummaryDescription;
