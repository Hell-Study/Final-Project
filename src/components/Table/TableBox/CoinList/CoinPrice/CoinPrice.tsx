import { memo } from 'react';
import * as styled from '../CoinList.styles';

interface IProps {
  tradePrice: number;
  binanceKRWPrice: number | null;
}

const CoinPrice = ({ tradePrice, binanceKRWPrice }: IProps) => {
  return (
    <styled.CoinRightWrap>
      <styled.CoinKoreanPrice>
        {tradePrice.toLocaleString('ko-KR')}
      </styled.CoinKoreanPrice>
      <styled.CoinSubText>
        {binanceKRWPrice && binanceKRWPrice.toLocaleString('ko-KR')}
      </styled.CoinSubText>
    </styled.CoinRightWrap>
  );
};

export default memo(CoinPrice);
