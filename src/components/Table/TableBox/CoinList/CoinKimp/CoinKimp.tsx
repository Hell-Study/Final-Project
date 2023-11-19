import { memo } from 'react';
import * as styled from '../CoinList.styles';

interface IProps {
  binanceKRWPrice: number | null;
  kimpRatio: number | null;
  kimpDiff: number | null;
}

const CoinKimp = ({ binanceKRWPrice, kimpRatio, kimpDiff }: IProps) => {
  return (
    <styled.CoinRightWrap>
      {binanceKRWPrice && kimpRatio && kimpDiff && (
        <>
          <styled.CoinKimpRatio $isPositive={kimpRatio}>
            {kimpRatio > 0 && '+'}
            {kimpRatio.toFixed(2)}%
          </styled.CoinKimpRatio>
          <styled.CoinSubText>
            {kimpDiff > 0 && '+'}
            {Number(kimpDiff.toFixed(2)).toLocaleString('ko-KR')}
          </styled.CoinSubText>
        </>
      )}
    </styled.CoinRightWrap>
  );
};

export default memo(CoinKimp);
