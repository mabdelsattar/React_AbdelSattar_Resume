/**
 * Custom Hook: useQuery
 * Simplified data fetching with loading, error, and data states
 */

import { useState, useEffect } from 'react';

/**
 * Simple useQuery Hook
 * @param {Function} queryFn - Function that returns a Promise
 * @param {Object} options - { enabled = true, onSuccess, onError }
 */
export const useQuery = (queryFn, options = {}) => {
  const { enabled = true, onSuccess, onError } = options;

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await queryFn();
      setData(result);
      onSuccess?.(result);
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      setError(message);
      onError?.(message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (enabled) {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled, queryFn]); // re-run when enabled or queryFn changes

  return { data, loading, error, refetch: fetchData };
};
