import axios from 'axios';
import { Interval } from 'components/Widget/Widget.constants';

interface ITicker {
  time: number;
  value: number;
}

export default async function getTickerWidgetData(
  pairId: string,
  interval: Interval,
): Promise<ITicker> {
  try {
    const response = await axios.get(
      `https://api.investing.com/api/financialdata/${pairId}/historical/chart/?interval=${interval}&pointscount=60`,
    );

    const lastItem = response.data.data[response.data.data.length - 1];
    return {
      time: lastItem[0],
      value: lastItem[4],
    };
  } catch (error) {
    console.error('An error occurred while fetching the data:', error);
    throw error;
  }
}
