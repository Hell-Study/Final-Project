import styled from 'styled-components';
import { ReactComponent as SortUp } from 'assets/images/sort-up.svg';
import { ReactComponent as SortDown } from 'assets/images/sort-down.svg';

interface FontColorProps {
  $isPositive: boolean;
}

export const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.bg_element4};
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.colors.alpha1} 0px 2px 10px 0px;
  padding: 1rem 1.1rem;
  gap: 0.5rem;
`;

export const CoinInfoContainer = styled.div`
  display: flex;
`;

export const CoinImg = styled.img`
  width: 2.375rem;
  height: 2.375rem;
`;

export const CoinInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.625rem;
`;

export const CoinIdentity = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0.1875rem;
  margin-bottom: 0.1875rem;
`;

export const CoinName = styled.span`
  color: ${({ theme }) => theme.colors.heading1};
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const CoinSymbol = styled.span`
  color: ${({ theme }) => theme.colors.heading2};
  font-family: Pretendard;
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const CoinPrice = styled.div<FontColorProps>`
  color: ${({ $isPositive, theme }) =>
    $isPositive ? theme.colors.red : theme.colors.blue};
  span {
    font-size: 0.9rem;
  }
`;

export const CoinChangeWrapper = styled.div<FontColorProps>`
  display: flex;
  align-items: flex-end;
  gap: 0.3125rem;
  margin-left: auto;

  color: ${({ $isPositive, theme }) =>
    $isPositive ? theme.colors.red : theme.colors.blue};
  font-family: Inter;
  font-size: 0.6875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const CoinChangeTitle = styled.span`
  color: ${({ theme }) => theme.colors.heading2};
  font-family: Inter;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const CaretUpSVG = styled(SortUp)`
  margin-right: 0.1875rem;
  height: 15px;
  fill: ${({ theme }) => theme.colors.red};
`;

export const CaretDownSVG = styled(SortDown)`
  margin-right: 0.1875rem;
  height: 15px;
  fill: ${({ theme }) => theme.colors.blue};
`;

export const CoinChangeText = styled(CoinChangeTitle)`
  color: inherit;
`;
