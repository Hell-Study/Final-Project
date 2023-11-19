import axios from 'axios';
import { Interval } from 'components/Widget/Widget.constants';
import type { IWidgetTicker } from 'components/Widget/Widget.types';

export default async function getChartWidgetData(
  pairId: string,
  interval: Interval,
): Promise<IWidgetTicker[]> {
  try {
    const currentDate = new Date();
    const prev9AM = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() - 1,
      9,
    );
    const prev9AMTimestamp = prev9AM.getTime();

    const response = await axios.get(
      `https://api.investing.com/api/financialdata/${pairId}/historical/chart/?interval=${interval}&pointscount=60`,
    );

    const data: IWidgetTicker[] = response.data.data.map((item: any) => ({
      time: item[0],
      value: item[4], // 종가
    }));

    let filteredData = data.filter((item) => item.time >= prev9AMTimestamp); // 전일 9시 데이터부터
    if (filteredData.length === 0) {
      filteredData = data.slice(-25);
    }
    return filteredData;
  } catch (error) {
    console.error('An error occurred while fetching the data:', error);
    throw error;
  }
}
