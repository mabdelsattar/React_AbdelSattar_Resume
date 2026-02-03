import React from 'react';

const Experience = ({ data }) => {
  return (
    <section className="experience">
      <h2>Professional Experience</h2>
      <div className="experience-list">
        {data.experience.map((job, index) => (
          <div className="experience-item" key={index}>
            <div className="experience-header">
              <h3>{job.role}</h3>
              <span className="period">{job.period.from} – {job.period.to}</span>
            </div>
            <div className="company-info">
              <p className="company">{job.company}</p>
              {job.location && <p className="location">{job.location}</p>}
            </div>
            <ul className="highlights">
              {job.highlights.map((highlight, idx) => (
                <li key={idx}>{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {data.earlierExperience && data.earlierExperience.length > 0 && (
        <div className="earlier-experience">
          <h3>Earlier Experience</h3>
          <ul>
            {data.earlierExperience.map((job, index) => (
              <li key={index}>{job}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default Experience;
