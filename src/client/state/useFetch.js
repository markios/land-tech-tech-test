// hooks.js
import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);
  
  useEffect(() => {
    async function fetchUrl() {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (error) {
        setFailed(true);
      } finally {
        setLoading(false);
      }
    }
    fetchUrl();
  }, [url]);

  return [data, loading, failed];
}
export { useFetch };