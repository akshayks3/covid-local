import React from 'react';

const SummaryDescription = ({}) => {
  const description =
    'Over the past week, Marriott hotels received a total of 218 feedback entries. Most comments highlighted excellent housekeeping and courteous staff. However, a few guests raised concerns around delayed room service and Wi-Fi issues during peak hours.';
  const trimmed =
    description.length > 800
      ? description.slice(0, 297).trim() + '...'
      : description;

  return (
    <div className="summary-description">
      <p>{trimmed}</p>
    </div>
  );
};

export default SummaryDescription;
