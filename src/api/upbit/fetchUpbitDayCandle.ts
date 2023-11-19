import type { CandlestickData } from 'lightweight-charts';
import type { IUpbitFetchDayCandle } from '../../@types/upbit.types';

const options = { method: 'GET', headers: { Accept: 'application/json' } };

export const fetchUpbitDayCandle = async (
  marketCode: string,
  date: string,
  count: number,
) => {
  try {
    const fetchedData = await (
      await fetch(
        `https://api.upbit.com/v1/candles/days?market=KRW-${marketCode}&to=${date}T09:00:00Z&count=${count}&convertingPriceUnit=KRW`,
        options,
      )
    ).json();

    const processedData: CandlestickData[] = [...fetchedData]
      .reverse()
      .map((data: IUpbitFetchDayCandle) => {
        return {
          time: data.candle_date_time_kst.slice(0, 10), // 2023-10-08T09:00:00에서 T전까지
          open: data.opening_price,
          high: data.high_price,
          low: data.low_price,
          close: data.trade_price,
        };
      });
    return processedData;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
