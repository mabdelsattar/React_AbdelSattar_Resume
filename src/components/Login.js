import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/Login.css';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Handle input change
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError(''); // Clear error on input change
  };

  /**
   * Handle form submission
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      const isLoginSuccessful = login(formData.username, formData.password);

      if (isLoginSuccessful) {
        setFormData({ username: '', password: '' });
        navigate('/'); // Redirect to resume page
      } else {
        setError('Invalid username or password. Try Admin/Admin');
      }

      setIsLoading(false);
    }, 500);
  };

  /**
   * Demo credentials hint
   */
  const fillDemoCredentials = () => {
    setFormData({
      username: 'Admin',
      password: 'Admin',
    });
    setError('');
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-box">
          {/* Header */}
          <div className="login-header">
            <h1>Welcome</h1>
            <p>Resume Portal Login</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="login-form">
            {/* Error Message */}
            {error && <div className="error-message">{error}</div>}

            {/* Username Field */}
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter username"
                disabled={isLoading}
                required
              />
            </div>

            {/* Password Field */}
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                disabled={isLoading}
                required
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="login-btn"
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          {/* Demo Credentials */}
          <div className="demo-section">
            <p className="demo-text">Demo Credentials:</p>
            <div className="demo-credentials">
              <p><strong>Username:</strong> Admin</p>
              <p><strong>Password:</strong> Admin</p>
            </div>
            <button
              type="button"
              className="demo-btn"
              onClick={fillDemoCredentials}
            >
              Fill Demo Credentials
            </button>
          </div>
        </div>

        {/* Side Info */}
        <div className="login-info">
          <h2>Mohammed AbdElSattar</h2>
          <p className="title">Principal Software Engineer</p>
          <p className="subtitle">Full Stack • .NET & Angular</p>
          <div className="skills-preview">
            <h3>Skills:</h3>
            <ul>
              <li>ASP.NET Core</li>
              <li>Angular</li>
              <li>Microservices</li>
              <li>Cloud Architecture</li>
              <li>React</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
