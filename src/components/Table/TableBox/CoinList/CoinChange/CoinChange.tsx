import { memo } from 'react';
import * as styled from '../CoinList.styles';
import { judgeColor } from 'utils';

interface IProps {
  changeRatio: number;
  changePrice: number;
}

const CoinChange = ({ changeRatio, changePrice }: IProps) => {
  return (
    <styled.CoinRightWrap>
      <styled.CoinChangeRatio $changeType={judgeColor(changeRatio)}>
        {changeRatio > 0 && '+'}
        {changeRatio.toFixed(2)}%
      </styled.CoinChangeRatio>
      <styled.CoinSubText>
        {changePrice.toLocaleString('ko-KR')}
      </styled.CoinSubText>
    </styled.CoinRightWrap>
  );
};

export default memo(CoinChange);
