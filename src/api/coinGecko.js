export async function fetchAssets() {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
  );

  if (!res.ok) throw new Error("Failed to fetch assets");

  return res.json();
}
