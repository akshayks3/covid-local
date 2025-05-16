import {useFilterContext} from '../contexts/filterContext';

import React from 'react';

const Summary = ({feedbackData}) => {
  console.log('this is the feedback data', feedbackData);
  const {filters} = useFilterContext();
  const getTotalRating = () => {
    let sum = 0;
    feedbackData.forEach((data) => {
      sum = sum + (data?.rating ?? 0);
    });
    const rating = Math.round((sum / feedbackData.length) * 100) / 100;
    return Number.isFinite(rating) ? rating : '-';
  };

  const getTotalCategories = () => {
    console.log('this is the filters', filters);
    if (filters.category) {
      return 1;
    }
    const uniqueCategoryIds = Array.from(
      new Set(
        feedbackData?.flatMap((item) =>
          item.categoryIds.split(',').map((id) => Number(id.trim()))
        )
      )
    );

    return uniqueCategoryIds?.length;
  };
  const items = [
    {
      title: 'Total Feedbacks',
      value: feedbackData?.length || 0,
      type: 'incidentsReported',
    },
    {
      title: 'Avg Rating',
      value: getTotalRating(),
      type: 'total',
    },
    {
      title: 'Total Categories',
      value: getTotalCategories(),
      type: 'external',
    },
  ];

  return (
    <div className="summary-container">
      {items.map(({title, value, type}) => (
        <div key={type} className={`summary-card ${type}`}>
          <h4 className="summary-title">{title}</h4>
          {/* {delta !== undefined && <p className="summary-delta">+{delta}</p>} */}
          <p className="summary-value">{value.toLocaleString()}</p>
          <div className="summary-graph-placeholder" />
        </div>
      ))}
    </div>
  );
};

export default Summary;
