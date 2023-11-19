import { useRef, useState, useEffect } from 'react';
import { useBinanceTicker } from 'hooks/binance';
import { baseExchangeState, marketCodesState } from 'recoil/atoms/commonAtoms';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import type { ITicker } from '../@types/common.types';
import type { IUpbitMarketCode, IUpbitTicker } from '../@types/upbit.types';
import type { IBithumbWsTicker } from '../@types/bithumb.types';
import { updateSocketDataWithBinance } from './binance';
import {
  changes,
  changesRatio,
  highRatio,
  highest_52_week_rate,
  lowRatio,
  lowest_52_week_rate,
} from 'utils/priceCalc';
import { fetchUpbitMarketCode } from 'api/upbit/fetchUpbitMarketCode';
import { fetchBithumbTicker } from 'api/bithumb/fetchBithumbTicker';
import { replaceDate } from 'utils';

export function useKoreanTicker() {
  const baseExchange = useRecoilValue(baseExchangeState);
  const setMarketCodes = useSetRecoilState(marketCodesState);
  const { binanceTickers } = useBinanceTicker();
  const [socketDatas, setSocketDatas] = useState<ITicker[]>([]);

  const socket = useRef<WebSocket | null>(null);

  const upbitWsTicker = async () => {
    const marketCodes = await fetchUpbitMarketCode();
    setMarketCodes(marketCodes.map((marketCode) => marketCode.market));

    socket.current = new WebSocket('wss://api.upbit.com/websocket/v1');
    socket.current.onopen = () => {
      if (socket.current?.readyState == 1) {
        socket.current.send(
          JSON.stringify([
            { ticket: 'seungjun2' },
            {
              type: 'ticker',
              codes: marketCodes.map((code: IUpbitMarketCode) => code.market),
            },
            { format: 'DEFAULT' },
          ]),
        );
      }
    };
    socket.current.onmessage = (evt: MessageEvent) => {
      if (evt.data instanceof Blob) {
        const reader = new FileReader();
        reader.onload = function () {
          const blobData = reader.result;
          try {
            const parsedData: IUpbitTicker = JSON.parse(blobData as string);
            const {
              code,
              trade_price,
              opening_price,
              signed_change_rate,
              signed_change_price,
              trade_date,
              highest_52_week_price,
              lowest_52_week_price,
              acc_trade_price_24h,
            } = parsedData;
            setSocketDatas((prevList) => {
              const existingIndex = prevList.findIndex(
                (item) => item.symbol === parsedData?.code.split('-')[1],
              );
              if (existingIndex !== -1) {
                return prevList.map((item, index) =>
                  index === existingIndex
                    ? {
                        ...item,
                        tradePrice: trade_price,
                        openingPrice: opening_price,
                        changeRatio: signed_change_rate * 100,
                        changePrice: signed_change_price,
                        highestRatio: highest_52_week_rate(
                          trade_price,
                          highest_52_week_price,
                        ),
                        highestPrice: highest_52_week_price,
                        lowestRatio: lowest_52_week_rate(
                          trade_price,
                          lowest_52_week_price,
                        ),
                        lowestPrice: lowest_52_week_price,
                        tradeValue_24H: acc_trade_price_24h,
                        date: replaceDate(trade_date),
                      }
                    : item,
                );
              } else {
                return [
                  ...prevList,
                  {
                    symbol: code.split('-')[1],
                    coinName: marketCodes.filter(
                      (marketCode: IUpbitMarketCode) =>
                        marketCode.market === code,
                    )[0].korean_name,
                    thumbnail: `https://static.upbit.com/logos/${
                      code.split('-')[1]
                    }.png`,
                    tradePrice: trade_price,
                    openingPrice: opening_price,
                    changeRatio: signed_change_rate * 100,
                    changePrice: signed_change_price,
                    highestRatio: highest_52_week_rate(
                      trade_price,
                      highest_52_week_price,
                    ),
                    highestPrice: highest_52_week_price,
                    lowestRatio: lowest_52_week_rate(
                      trade_price,
                      lowest_52_week_price,
                    ),
                    lowestPrice: lowest_52_week_price,
                    tradeValue_24H: acc_trade_price_24h,
                    date: replaceDate(trade_date),
                  },
                ];
              }
            });
          } catch (error) {
            console.error('JSON 데이터 파싱 오류:', error);
          }
        };
        reader.readAsText(evt.data);
      }
    };
  };

  const bithumbWsTicker = async () => {
    const { marketCodes, fetchData } = await fetchBithumbTicker();
    setMarketCodes(marketCodes);
    setSocketDatas(fetchData);
    socket.current = new WebSocket('wss://pubwss.bithumb.com/pub/ws');

    socket.current.onopen = () => {
      if (socket.current?.readyState === 1) {
        socket.current?.send(
          JSON.stringify({
            type: 'ticker',
            symbols: marketCodes.map((x: string) => {
              return x + '_KRW';
            }),
            tickTypes: ['MID', '24H'],
          }),
        );
      }
    };

    socket.current.onmessage = async (e) => {
      const data: { type: string; content: IBithumbWsTicker } =
        await JSON.parse(e.data);
      if (data.type === 'ticker') {
        const {
          tickType,
          symbol,
          closePrice,
          lowPrice,
          highPrice,
          prevClosePrice,
          value,
          date,
        } = data.content;

        setSocketDatas((prevState) => {
          const existingIndex = prevState.findIndex(
            (item) => item.symbol === symbol.replace('_KRW', ''),
          );
          if (existingIndex !== -1) {
            if (tickType === 'MID') {
              prevState[existingIndex] = {
                ...prevState[existingIndex],
                tradePrice: Number(closePrice),
                changeRatio: changesRatio(closePrice, prevClosePrice),
                changePrice: changes(closePrice, prevClosePrice),
                highestRatio: highRatio(closePrice, highPrice),
                highestPrice: Number(highPrice),
                lowestRatio: lowRatio(closePrice, lowPrice),
                lowestPrice: Number(lowPrice),
                date: replaceDate(date),
              };
              return [...prevState];
            } else {
              prevState[existingIndex] = {
                ...prevState[existingIndex],
                tradeValue_24H: Number(value),
              };
              return [...prevState];
            }
          }
          return [...prevState];
        });
      }
    };
  };

  useEffect(() => {
    if (baseExchange === 'upbit') {
      upbitWsTicker();
    } else if (baseExchange === 'bithumb') {
      bithumbWsTicker();
    }
    return () => {
      if (socket.current?.readyState !== 0) {
        socket.current?.close();
        setSocketDatas([]);
        setMarketCodes([]);
      }
    };
  }, [baseExchange]);

  useEffect(() => {
    if (binanceTickers) {
      const newList = updateSocketDataWithBinance(socketDatas, binanceTickers);
      setSocketDatas(newList);
    }
  }, [binanceTickers]);

  return socketDatas;
}
