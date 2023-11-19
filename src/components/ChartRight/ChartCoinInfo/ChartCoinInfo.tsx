import { memo } from 'react';
import * as styled from './ChartCoinInfo.styles';

interface IProps {
  symbol: string;
  thumbnail: string;
  coinName: string;
  tradePrice: number;
  changeRatio: number;
  changePrice: number;
}

const ChartCoinInfo = ({
  symbol,
  thumbnail,
  coinName,
  tradePrice,
  changeRatio,
  changePrice,
}: IProps) => {
  return (
    <styled.CoinInfoContainer>
      <styled.CoinImg alt={`${symbol} 아이콘`} src={thumbnail} loading="lazy" />
      <styled.CoinInfo>
        <styled.CoinIdentity>
          <styled.CoinName>{coinName}</styled.CoinName>
          <styled.CoinSymbol>/ {symbol}</styled.CoinSymbol>
        </styled.CoinIdentity>

        <styled.CoinPrice $isPositive={changeRatio > 0}>
          {tradePrice.toLocaleString('ko-KR')} <span>KRW</span>
        </styled.CoinPrice>
      </styled.CoinInfo>

      <styled.CoinChangeWrapper $isPositive={changeRatio > 0}>
        <styled.CoinChangeTitle>전일대비</styled.CoinChangeTitle>
        <styled.CoinChangeText>
          {changeRatio > 0 ? (
            <styled.CaretUpSVG viewBox="0 -190 320 512" />
          ) : (
            <styled.CaretDownSVG viewBox="0 60 320 512" />
          )}
          {Math.abs(changeRatio).toFixed(2)}%
        </styled.CoinChangeText>
        <styled.CoinChangeText>
          {changePrice > 0 ? '+' : '-'}
          {Math.abs(changePrice)?.toLocaleString('ko-KR')}
        </styled.CoinChangeText>
      </styled.CoinChangeWrapper>
    </styled.CoinInfoContainer>
  );
};

export default memo(ChartCoinInfo);
