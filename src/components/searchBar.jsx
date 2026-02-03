export default function SearchBar({ value, onChange, count }) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
      <div className="w-full sm:max-w-md">
        <label className="mb-1 block text-xs font-medium text-gray-600">
          Search by name
        </label>
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="e.g., Bitcoin"
          className="w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-gray-400"
        />
      </div>

      <div className="text-xs text-gray-600">
        Showing <span className="font-medium text-gray-800">{count}</span> assets
      </div>
    </div>
  );
}
