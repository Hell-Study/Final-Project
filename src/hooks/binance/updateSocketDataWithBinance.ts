import type { IBinanceTicker } from '../../@types/binance.types';
import type { ITicker } from '../../@types/common.types';
import { removeUSDT } from 'utils';

export function updateSocketDataWithBinance(
  socketData: ITicker[],
  binanceTickers: IBinanceTicker[],
): ITicker[] {
  return socketData.map((item) => {
    const binanceTicker = binanceTickers.find(
      (ticker) => removeUSDT(ticker.s) === item.symbol,
    );
    if (binanceTicker) {
      return {
        ...item,
        binancePrice: Number(binanceTicker.c),
      };
    }
    return item;
  });
}
