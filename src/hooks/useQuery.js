/**
 * Custom Hook: useQuery
 * Handles data fetching with loading, error, and data states
 * Professional approach for API calls
 */

import { useState, useEffect } from 'react';

/**
 * useQuery Hook
 * @param {Function} queryFn - Function that returns a Promise (API call)
 * @param {Object} options - Configuration options
 * @returns {Object} { data, loading, error, refetch }
 */
export const useQuery = (queryFn, options = {}) => {
  const { enabled = true, onSuccess, onError } = options;

  const [state, setState] = useState({
    data: null,
    loading: false,
    error: null,
  });

  const fetchData = async () => {
    setState({ data: null, loading: true, error: null });

    try {
      const result = await queryFn();
      setState({ data: result, loading: false, error: null });
      onSuccess?.(result);
    } catch (err) {
      const error = err instanceof Error ? err.message : 'Unknown error occurred';
      setState({ data: null, loading: false, error });
      onError?.(error);
    }
  };

  useEffect(() => {
    if (enabled) {
      fetchData();
    }
  }, [enabled]);

  return {
    data: state.data,
    loading: state.loading,
    error: state.error,
    refetch: fetchData,
  };
};
