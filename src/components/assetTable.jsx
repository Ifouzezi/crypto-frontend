import AssetRow from "./assetRow";

export default function AssetTable({ assets }) {
  return (
    <div className="overflow-hidden rounded border border-gray-200 bg-white">
      <table className="w-full border-collapse">
        <thead className="bg-gray-50">
          <tr className="border-b">
            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">
              Name
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">
              Symbol
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">
              Price (USD)
            </th>
          </tr>
        </thead>

        <tbody>
          {assets.length === 0 ? (
            <tr>
              <td className="px-4 py-6 text-sm text-gray-600" colSpan={3}>
                No assets found.
              </td>
            </tr>
          ) : (
            assets.map((asset) => <AssetRow key={asset.id} asset={asset} />)
          )}
        </tbody>
      </table>
    </div>
  );
}
