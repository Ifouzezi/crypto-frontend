import { formatUSD } from "../utils/format";

export default function AssetRow({ asset }) {
  return (
    <tr className="border-b last:border-b-0">
      <td className="px-4 py-3 text-sm text-gray-900">{asset.name}</td>
      <td className="px-4 py-3 text-sm text-gray-600 uppercase">{asset.symbol}</td>
      <td className="px-4 py-3 text-sm text-gray-900">
        {formatUSD(asset.current_price)}
      </td>
    </tr>
  );
}
