import { useRecoilValue } from 'recoil';
import type { ITicker } from '../@types/common.types';
import {
  tableSortValueState,
  tableSortUpDownState,
} from 'recoil/atoms/tableAtoms';
import { kimchiPremiumRatio } from 'utils';
import { useEffect } from 'react';
import { exchangeRateState } from 'recoil/atoms/exchangeAtoms';

export const useTableSort = (socketDatas: ITicker[]) => {
  const tableSortValue = useRecoilValue(tableSortValueState);
  const tableSortUpDown = useRecoilValue(tableSortUpDownState);
  const exchangeRate = useRecoilValue(exchangeRateState);

  useEffect(() => {
    switch (tableSortValue) {
      case '코인':
        if (tableSortUpDown) {
          socketDatas.sort((a, b) => {
            if (a.symbol > b.symbol) {
              return 1;
            } else {
              return -1;
            }
          });
        } else {
          socketDatas.sort((a, b) => {
            if (a.symbol > b.symbol) {
              return -1;
            } else {
              return 1;
            }
          });
        }
        break;
      case '현재가':
        if (tableSortUpDown) {
          socketDatas.sort((a, b) => a.tradePrice - b.tradePrice);
        } else {
          socketDatas.sort((a, b) => b.tradePrice - a.tradePrice);
        }
        break;
      case '김프':
        if (tableSortUpDown) {
          socketDatas.sort((a, b) => {
            if (a.binancePrice && b.binancePrice) {
              return (
                kimchiPremiumRatio(a.tradePrice, a.binancePrice, exchangeRate) -
                kimchiPremiumRatio(b.tradePrice, b.binancePrice, exchangeRate)
              );
            } else if (a.binancePrice && !b.binancePrice) {
              return -1;
            } else {
              return 1;
            }
          });
        } else {
          socketDatas.sort((a, b) => {
            if (a.binancePrice && b.binancePrice) {
              return (
                kimchiPremiumRatio(b.tradePrice, b.binancePrice, exchangeRate) -
                kimchiPremiumRatio(a.tradePrice, a.binancePrice, exchangeRate)
              );
            } else if (a.binancePrice && !b.binancePrice) {
              return -1;
            } else {
              return 1;
            }
          });
        }
        break;
      case '전일대비':
        if (tableSortUpDown) {
          socketDatas.sort((a, b) => a.changeRatio - b.changeRatio);
        } else {
          socketDatas.sort((a, b) => b.changeRatio - a.changeRatio);
        }
        break;
      case '고가대비':
        if (tableSortUpDown) {
          socketDatas.sort((a, b) => a.highestRatio - b.highestRatio);
        } else {
          socketDatas.sort((a, b) => b.highestRatio - a.highestRatio);
        }
        break;
      case '저가대비':
        if (tableSortUpDown) {
          socketDatas.sort((a, b) => a.lowestRatio - b.lowestRatio);
        } else {
          socketDatas.sort((a, b) => b.lowestRatio - a.lowestRatio);
        }
        break;
      case '거래액(일)':
        if (tableSortUpDown) {
          socketDatas.sort((a, b) => a.tradeValue_24H - b.tradeValue_24H);
        } else {
          socketDatas.sort((a, b) => b.tradeValue_24H - a.tradeValue_24H);
        }
        break;
    }
  }, [socketDatas, tableSortValue, tableSortUpDown]);

  return socketDatas;
};
