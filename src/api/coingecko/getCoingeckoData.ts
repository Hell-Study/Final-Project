export const getCoingeckoData = async () => {
  const CoingeckoCoinData = await (
    await fetch('https://api.coingecko.com/api/v3/search?locale=ko')
  ).json();

  return CoingeckoCoinData;
};
