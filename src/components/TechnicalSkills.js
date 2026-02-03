import React from 'react';

const TechnicalSkills = ({ data }) => {
  const { technicalSkills } = data;

  const skillCategories = [
    { label: 'Backend & Architecture', key: 'backendAndArchitecture' },
    { label: 'Message Brokers', key: 'messageBrokers' },
    { label: 'Frontend', key: 'frontend' },
    { label: 'Databases', key: 'databases' },
    { label: 'Cloud & DevOps', key: 'cloudAndDevOps' },
    { label: 'AI & Automation', key: 'aiAndAutomation' },
  ];

  return (
    <section className="technical-skills">
      <h2>Technical Skills</h2>
      <div className="skills-grid">
        {skillCategories.map((category) => (
          <div className="skill-category" key={category.key}>
            <h3>{category.label}</h3>
            <ul>
              {technicalSkills[category.key]?.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnicalSkills;
