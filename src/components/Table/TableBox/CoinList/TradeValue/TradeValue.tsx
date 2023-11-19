import { memo } from 'react';
import * as styled from '../CoinList.styles';
import { convertMillonWon } from 'utils';

interface IProps {
  tradeValue_24H: number;
}

const TradeValue = ({ tradeValue_24H }: IProps) => {
  return (
    <styled.CoinRightWrap>
      <styled.CoinSubText>
        {Math.ceil(convertMillonWon(tradeValue_24H)).toLocaleString('ko-KR')}
        백만
      </styled.CoinSubText>
    </styled.CoinRightWrap>
  );
};

export default memo(TradeValue);
