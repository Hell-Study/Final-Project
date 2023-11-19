import { memo, useEffect, useState } from 'react';
import * as styled from './CoinList.styles';
import type { ITicker } from '../../../../@types/common.types';
import { useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil';
import { exchangeRateState } from 'recoil/atoms/exchangeAtoms';
import {
  selectedCoinState,
  selectedCoinInfoState,
} from 'recoil/atoms/tableAtoms';
import {
  binancePriceToKRW,
  kimchiPremiumDiff,
  kimchiPremiumRatio,
} from 'utils';
import { CoinInfo } from './CoinInfo';
import { TradeValue } from './TradeValue';
import { CoinPrice } from './CoinPrice';
import { CoinKimp } from './CoinKimp';
import { CoinChange } from './CoinChange';
import { CoinHighest } from './CoinHighest';
import { CoinLowest } from './CoinLowest';
import { ListChildComponentProps } from 'react-window';

const CoinList = ({
  data: socketData,
  index,
  style,
}: ListChildComponentProps) => {
  const {
    symbol,
    coinName,
    thumbnail,
    tradePrice,
    changeRatio,
    changePrice,
    highestRatio,
    highestPrice,
    lowestRatio,
    lowestPrice,
    tradeValue_24H,
    binancePrice,
  }: ITicker = socketData[index];

  const [selectedCoin, setSelectedCoin] = useRecoilState(selectedCoinState);
  const setSelectedCoinInfo = useSetRecoilState(selectedCoinInfoState);

  useEffect(() => {
    if (symbol === selectedCoin) setSelectedCoinInfo(socketData[index]);
  }, [selectedCoin, socketData[index]]);

  const clickCoinHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    setSelectedCoin(e.currentTarget.id);
  };

  const myExchangeRate = useRecoilValue(exchangeRateState);
  const [binanceKRWPrice, setBinanceKRWPrice] = useState<number | null>(null);
  const [kimpRatio, setKimpRatio] = useState<number | null>(null);
  const [kimpDiff, setKimpDiff] = useState<number | null>(null);
  useEffect(() => {
    if (binancePrice) {
      setBinanceKRWPrice(binancePriceToKRW(binancePrice, myExchangeRate));
      setKimpRatio(
        kimchiPremiumRatio(tradePrice, binancePrice, myExchangeRate),
      );
      setKimpDiff(kimchiPremiumDiff(tradePrice, binancePrice, myExchangeRate));
    }
  }, [tradePrice, binancePrice, myExchangeRate]);

  return (
    <styled.CoinBox
      id={symbol}
      onClick={clickCoinHandler}
      $selected={selectedCoin === symbol}
      style={style}
    >
      <CoinInfo coinName={coinName} thumbnail={thumbnail} symbol={symbol} />
      <CoinPrice tradePrice={tradePrice} binanceKRWPrice={binanceKRWPrice} />
      <CoinKimp
        binanceKRWPrice={binanceKRWPrice}
        kimpRatio={kimpRatio}
        kimpDiff={kimpDiff}
      />
      <CoinChange changeRatio={changeRatio} changePrice={changePrice} />
      <CoinHighest highestRatio={highestRatio} highestPrice={highestPrice} />
      <CoinLowest lowestRatio={lowestRatio} lowestPrice={lowestPrice} />
      <TradeValue tradeValue_24H={tradeValue_24H} />
    </styled.CoinBox>
  );
};

export default memo(CoinList);
