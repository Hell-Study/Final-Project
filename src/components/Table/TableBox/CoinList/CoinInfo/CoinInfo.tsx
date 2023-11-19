import { memo } from 'react';
import * as styled from '../CoinList.styles';

interface IProps {
  coinName: string;
  thumbnail: string;
  symbol: string;
}

const CoinInfo = ({ coinName, thumbnail, symbol }: IProps) => {
  return (
    <>
      <styled.CoinIconWrap>
        <styled.CoinIcon
          alt={`${coinName} 아이콘`}
          src={thumbnail}
          loading="lazy"
        />
      </styled.CoinIconWrap>

      <styled.CoinLeftWrap>
        <styled.CoinName>{coinName}</styled.CoinName>
        <styled.CoinSubText>{symbol}</styled.CoinSubText>
      </styled.CoinLeftWrap>
    </>
  );
};

export default memo(CoinInfo);
