export default function ErrorMessage({ message }) {
  return (
    <div className="p-6">
      <div className="rounded border border-red-200 bg-red-50 p-4">
        <p className="text-sm font-medium text-red-800">Something went wrong.</p>
        <p className="mt-1 text-sm text-red-700">
          {message || "Please try again later."}
        </p>
      </div>
    </div>
  );
}
