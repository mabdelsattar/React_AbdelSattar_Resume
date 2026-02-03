/**
 * AuthContext - Manages user authentication state
 * Provides login/logout functionality throughout the app
 */

import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

/**
 * AuthProvider Component
 * Wraps your app to provide authentication state
 */
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // Check if user was previously logged in
    return localStorage.getItem('isAuthenticated') === 'true';
  });

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  /**
   * Login function
   * @param {string} username
   * @param {string} password
   * @returns {boolean} - True if login successful
   */
  const login = (username, password) => {
    // Simple hardcoded authentication
    if (username === 'Admin' && password === 'Admin') {
      const userData = { username, loginTime: new Date().toISOString() };
      setUser(userData);
      setIsAuthenticated(true);
      
      // Save to localStorage for persistence
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('user', JSON.stringify(userData));
      
      return true;
    }
    return false;
  };

  /**
   * Logout function
   */
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
  };

  const value = {
    isAuthenticated,
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

/**
 * Custom hook to use auth context
 * Usage: const { isAuthenticated, user, login, logout } = useAuth();
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
