import React from 'react';

const PersonalInfo = ({ data }) => {
  const { personalInfo } = data;

  return (
    <header className="personal-info">
      <div className="personal-header">
        <h1 className="full-name">{personalInfo.fullName}</h1>
        <h2 className="title">{personalInfo.title}</h2>
        <p className="location">{personalInfo.location}</p>
      </div>
      
      <div className="contact-info">
        <div className="contact-item">
          <span className="label">Email:</span>
          <a href={`mailto:${personalInfo.contact.email}`}>
            {personalInfo.contact.email}
          </a>
        </div>
        {personalInfo.contact.phones.map((phone, index) => (
          <div className="contact-item" key={index}>
            <span className="label">Phone:</span>
            <a href={`tel:${phone}`}>{phone}</a>
          </div>
        ))}
        <div className="contact-item">
          <span className="label">LinkedIn:</span>
          <a href={personalInfo.contact.linkedin} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      </div>
    </header>
  );
};

export default PersonalInfo;
