import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PersonalInfo from './components/PersonalInfo';
import ProfessionalSummary from './components/ProfessionalSummary';
import TechnicalSkills from './components/TechnicalSkills';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Community from './components/Community';
import Login from './components/Login';
import { AuthProvider, useAuth } from './context/AuthContext';
import { useQuery } from './hooks/useQuery';
import { fetchResumeData } from './services/api';

/**
 * ProtectedRoute Component
 * Only allows authenticated users to access resume
 */
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

/**
 * ResumeContent Component
 * Displays all resume sections
 */
const ResumeContent = ({ resumeData, loading, error }) => {
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
};

/**
 * ResumeRoute Component
 * Handles data fetching for resume page
 */
const ResumeRoute = () => {
  const { data: resumeData, loading, error } = useQuery(fetchResumeData, {
    onSuccess: (data) => console.log('Resume data loaded successfully:', data),
    onError: (error) => console.error('Error loading resume data:', error),
  });

  return <ResumeContent resumeData={resumeData} loading={loading} error={error} />;
};

/**
 * Main App Component
 */
function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Login Route */}
          <Route path="/login" element={<Login />} />

          {/* Protected Resume Route */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <ResumeRoute />
              </ProtectedRoute>
            }
          />

          {/* Redirect unknown routes to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

