import React, { useState, useEffect } from 'react';
import './App.css';
import PersonalInfo from './components/PersonalInfo';
import ProfessionalSummary from './components/ProfessionalSummary';
import TechnicalSkills from './components/TechnicalSkills';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Community from './components/Community';

function App() {
  const [resumeData, setResumeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/myresume.json')
      .then((response) => response.json())
      .then((data) => {
        setResumeData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading">Loading resume...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  if (!resumeData) {
    return <div className="error">No resume data available</div>;
  }

  return (
    <div className="App">
      <div className="resume-container">
        <PersonalInfo data={resumeData} />
        <ProfessionalSummary data={resumeData} />
        <TechnicalSkills data={resumeData} />
        <Experience data={resumeData} />
        <Education data={resumeData} />
        <Certifications data={resumeData} />
        <Community data={resumeData} />
      </div>
    </div>
  );
}

export default App;

