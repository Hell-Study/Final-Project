import { memo } from 'react';
import * as styled from '../CoinList.styles';

interface IProps {
  highestRatio: number;
  highestPrice: number;
}

const CoinHighest = ({ highestRatio, highestPrice }: IProps) => {
  return (
    <styled.CoinRightWrap>
      <styled.CoinHighestRatio>
        {highestRatio > 0 && '+'}
        {highestRatio.toFixed(2)}%
      </styled.CoinHighestRatio>
      <styled.CoinSubText>
        {highestPrice.toLocaleString('ko-KR')}
      </styled.CoinSubText>
    </styled.CoinRightWrap>
  );
};

export default memo(CoinHighest);
