import styled, { DefaultTheme } from 'styled-components';

export const CoinBox = styled.div<{ $selected: boolean }>`
  height: 4rem;
  display: grid;
  grid-template-columns: 0.4fr 1.5fr 1fr 1fr 1fr 1fr 1fr 1fr;
  padding: 0.625rem 0.9375rem;
  border-radius: 15px;

  cursor: pointer;

  background-color: ${({ $selected }) => {
    return $selected
      ? ({ theme }: DefaultTheme) => theme.colors.alpha2
      : 'inherit';
  }};

  &:hover {
    background-color: ${({ theme }) => theme.colors.alpha2};
  }
`;

export const CoinIconWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CoinIcon = styled.img`
  width: 1.6875rem;
  height: 1.6875rem;
  margin-right: 0.9375rem;
`;

export const CoinLeftWrap = styled(CoinIconWrap)`
  flex-direction: column;
  align-items: flex-start;
`;

export const CoinName = styled.div`
  color: ${({ theme }) => theme.colors.heading1};
  font-family: Pretendard;
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const CoinSubText = styled.div`
  color: ${({ theme }) => theme.colors.text3};
  font-family: Pretendard;
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const CoinRightWrap = styled(CoinLeftWrap)`
  align-items: flex-end;
`;

export const CoinKoreanPrice = styled(CoinName)``;

export const CoinKimpRatio = styled(CoinName)<{ $isPositive: number }>`
  color: ${({ $isPositive }) =>
    $isPositive > 0
      ? ({ theme }: DefaultTheme) => theme.colors.red
      : ({ theme }: DefaultTheme) => theme.colors.blue};
`;

export const CoinChangeRatio = styled(CoinName)<{ $changeType: string }>`
  color: ${({ $changeType }) => {
    switch ($changeType) {
      case 'RISE':
        return ({ theme }: DefaultTheme) => theme.colors.red;
      case 'EVEN':
        return ({ theme }: DefaultTheme) => theme.colors.heading1;
      case 'FALL':
        return ({ theme }: DefaultTheme) => theme.colors.blue;
    }
  }};
`;

export const CoinHighestRatio = styled(CoinName)`
  color: ${({ theme }: DefaultTheme) => theme.colors.blue};
`;

export const CoinLowestRatio = styled(CoinName)`
  color: ${({ theme }: DefaultTheme) => theme.colors.red};
`;
