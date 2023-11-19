import type { CandlestickData } from 'lightweight-charts';
import type { IBithumbFetchCandlestick } from '../../@types/bithumb.types';
import { convertDate } from 'utils';

const options = { method: 'GET', headers: { accept: 'application/json' } };

export const fetchBithumbCandlestick = async (
  order_currency: string,
  chart_intervals: string,
) => {
  try {
    const fetchedData = await (
      await fetch(
        `https://api.bithumb.com/public/candlestick/${order_currency}_KRW/${chart_intervals}`,
        options,
      )
    ).json();

    const processedData: CandlestickData[] = fetchedData.data
      .map((data: IBithumbFetchCandlestick) => {
        const time = convertDate(data[0]);
        return {
          time: time,
          open: Number(data[1]),
          close: Number(data[2]),
          high: Number(data[3]),
          low: Number(data[4]),
        };
      })
      // 중복되는 코인 삭제
      .reduce((acc: CandlestickData[], current: CandlestickData) => {
        if (
          acc.findIndex(({ time }) => {
            return time === current.time;
          }) === -1
        ) {
          acc.push(current);
        }
        return acc;
      }, []);

    return processedData;
  } catch (error) {
    console.error('bithumb candlestick api 오류 발생', error);
    throw error;
  }
};
