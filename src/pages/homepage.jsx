import { useMemo, useState } from "react";
import useAssets from "../hooks/useAssets";
import { AssetTable, ErrorMessage, Loading, SearchBar } from "../components";


export default function Homepage() {
  const { data, loading, error } = useAssets();
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return data;
    return data.filter((a) => a.name.toLowerCase().includes(q));
  }, [data, query]);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="mx-auto max-w-4xl p-6">
      <div className="mb-4">
        <h1 className="text-lg font-semibold text-gray-900">Digital Assets</h1>
        <p className="mt-1 text-sm text-gray-600">
          Live prices fetched from a public API.
        </p>
      </div>

      <div className="mb-4">
        <SearchBar value={query} onChange={setQuery} count={filtered.length} />
      </div>

      <AssetTable assets={filtered} />
    </div>
  );
}
