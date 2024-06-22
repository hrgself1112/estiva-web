"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';

// Custom hook for fetching data with Axios
function useAxiosFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [status, setstatus] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(url);
        setData(response.data);
        setstatus(response.status)
    } catch (error) {
        setError(error);
        setstatus(response.status)
    } finally {
        setLoading(false);
        setstatus(response.status)
      }
    };

    fetchData();

    // Clean up function
    return () => {
      // Cancel the request (if it's still pending) when the component unmounts
      // This is optional but can prevent memory leaks if the component unmounts before the request is complete
    };
  }, [url]); // Re-run effect whenever the URL changes

  return { data, loading, error };
}

export default useAxiosFetch;
