/**
 * API Service
 * Centralized API calls for the application
 */

const API_BASE = process.env.REACT_APP_API_URL || '';

/**
 * Fetch resume data from JSON file
 * @returns {Promise<Object>} Resume data
 */
export const fetchResumeData = async () => {
  const response = await fetch(`${API_BASE}/myresume.json`);
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  return response.json();
};

/**
 * Generic fetch function for any API endpoint
 * @param {string} url - API endpoint URL
 * @param {Object} options - Fetch options
 * @returns {Promise<Object>} Response data
 */
export const apiCall = async (url, options = {}) => {
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const config = { ...defaultOptions, ...options };

  const response = await fetch(`${API_BASE}${url}`, config);

  if (!response.ok) {
    throw new Error(`API Error: ${response.status} - ${response.statusText}`);
  }

  return response.json();
};
