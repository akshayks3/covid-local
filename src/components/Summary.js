import React from 'react';

const Summary = ({}) => {
  const items = [
    {
      title: 'Incidents Reported',
      value: 500,
      type: 'incidentsReported',
    },
    {
      title: 'Positive Feedbacks',
      value: 500,
      type: 'total',
    },
    {
      title: 'External Feedbacks',
      value: 45637,
      type: 'external',
    },
    {
      title: 'Internal    Feedbacks',
      value: 3456,
      type: 'internal',
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
