import React from 'react';

const ProfessionalSummary = ({ data }) => {
  return (
    <section className="professional-summary">
      <h2>Professional Summary</h2>
      <p>{data.professionalSummary}</p>
    </section>
  );
};

export default ProfessionalSummary;
