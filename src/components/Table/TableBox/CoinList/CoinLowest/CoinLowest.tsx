import { memo } from 'react';
import * as styled from '../CoinList.styles';

interface IProps {
  lowestRatio: number;
  lowestPrice: number;
}

const CoinLowest = ({ lowestRatio, lowestPrice }: IProps) => {
  return (
    <styled.CoinRightWrap>
      <styled.CoinLowestRatio>
        +{lowestRatio.toFixed(2)}%
      </styled.CoinLowestRatio>
      <styled.CoinSubText>
        {lowestPrice.toLocaleString('ko-KR')}
      </styled.CoinSubText>
    </styled.CoinRightWrap>
  );
};

export default memo(CoinLowest);
