import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PersonalInfo from './components/PersonalInfo';
import ProfessionalSummary from './components/ProfessionalSummary';
import TechnicalSkills from './components/TechnicalSkills';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Community from './components/Community';
import { useQuery } from './hooks/useQuery';
import { fetchResumeData } from './services/api';
import Contact from './components/Contact';

function App() {
  const { data: resumeData, loading, error, refetch } = useQuery(fetchResumeData, {
    enabled: true,
    onError: (err) => console.error('Failed loading resume:', err),
  });

  if (loading) {
    return <div className="loading">Loading resume...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  if (!resumeData) {
    return <div className="error">No resume data available</div>;
  }

  const ResumePage = () => (
    <div className="App">
      <div className="top-bar">
        <Link to="/contact" className="contact-button">Contact Me</Link>
      </div>

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

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ResumePage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

