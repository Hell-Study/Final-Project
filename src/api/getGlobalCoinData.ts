import axios from 'axios';

export default async function getGlobalCoinData() {
  try {
    const cachedData = sessionStorage.getItem('globalCoinData');

    if (cachedData) {
      return JSON.parse(cachedData);
    } else {
      const response = await axios.get('https://api.coinlore.net/api/global/');
      const data = await response.data;

      sessionStorage.setItem('globalCoinData', JSON.stringify(data));

      return data;
    }
  } catch (error) {
    console.error('An error occurred while fetching the data:', error);
  }
}
