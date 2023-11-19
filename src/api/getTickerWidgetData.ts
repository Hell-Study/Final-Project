import axios from 'axios';
import { Interval } from 'components/Widget/Widget.constants';
import type { IWidgetTicker } from 'components/Widget/Widget.types';

export default async function getTickerWidgetData(
  pairId: string,
  interval: Interval,
  type: 'current' | 'previous' = 'current',
): Promise<IWidgetTicker> {
  try {
    const response = await axios.get(
      `https://api.investing.com/api/financialdata/${pairId}/historical/chart/?interval=${interval}&pointscount=60`,
    );

    const dataIndex =
      type === 'current'
        ? response.data.data.length - 1
        : response.data.data.length - 2;
    const item = response.data.data[dataIndex];
    return {
      time: item[0],
      value: item[4],
    };
  } catch (error) {
    console.error('An error occurred while fetching the data:', error);
    throw error;
  }
}
