import React from 'react';

const Education = ({ data }) => {
  const { education } = data;

  return (
    <section className="education">
      <h2>Education</h2>
      <div className="education-item">
        <div className="education-header">
          <h3>{education.degree}</h3>
          <span className="grade">Grade: {education.grade}</span>
        </div>
        <p className="institution">{education.institution}</p>
        <p className="period">{education.period}</p>
        <p className="graduation-project">
          <strong>Graduation Project:</strong> {education.graduationProject}
        </p>
      </div>
    </section>
  );
};

export default Education;
