import type { ITicker } from '../../@types/common.types';
import { getCoingeckoData } from 'api/coingecko/getCoingeckoData';
import { changes, changesRatio, convertDate, highRatio, lowRatio } from 'utils';
import { matchCoingecko } from 'utils';

type IFetchTicker = [
  string,
  {
    opening_price: string;
    closing_price: string;
    min_price: string;
    max_price: string;
    units_traded: string;
    acc_trade_value: string;
    prev_closing_price: string;
    units_traded_24H: string;
    acc_trade_value_24H: string;
    fluctate_24H: string;
    fluctate_rate_24H: string;
  },
];

const options = { method: 'GET', headers: { accept: 'application/json' } };

export const fetchBithumbTicker = async () => {
  const coingeckoData = await getCoingeckoData();

  try {
    const bithumbTicker = await (
      await fetch('https://api.bithumb.com/public/ticker/ALL_KRW', options)
    ).json();

    const marketCodes = Object.keys(bithumbTicker.data);
    const fetchArr: IFetchTicker[] = Object.entries(bithumbTicker.data);
    const date = convertDate(Number(fetchArr[fetchArr.length - 1][1]));
    fetchArr.splice(fetchArr.length - 1); // 배열 마지막 날짜 값 제거

    const fetchData: ITicker[] = [];
    fetchArr.map((data) => {
      const { coinName, thumb } = matchCoingecko(coingeckoData.coins, data[0]);
      const {
        opening_price,
        closing_price,
        prev_closing_price,
        min_price,
        max_price,
        acc_trade_value_24H,
      } = data[1];

      fetchData.push({
        symbol: data[0],
        tradePrice: Number(closing_price),
        coinName: coinName,
        thumbnail: thumb,
        openingPrice: Number(opening_price),
        changeRatio: changesRatio(closing_price, prev_closing_price),
        changePrice: changes(closing_price, prev_closing_price),
        highestRatio: highRatio(closing_price, max_price),
        highestPrice: Number(max_price),
        lowestRatio: lowRatio(closing_price, min_price),
        lowestPrice: Number(min_price),
        tradeValue_24H: Number(acc_trade_value_24H),
        date: date,
      });
    });

    return { marketCodes, fetchData };
  } catch (error) {
    console.error('bithumb ticker fetch api 오류 발생', error);
    throw error;
  }
};
