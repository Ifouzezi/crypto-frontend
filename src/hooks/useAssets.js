import { useEffect, useState } from "react";
import { fetchAssets } from "../api/coinGecko";

export default function useAssets() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function load() {
    try {
      setLoading(true);
      setError(null);
      const assets = await fetchAssets();
      setData(assets);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  return { data, loading, error, refresh: load };
}
