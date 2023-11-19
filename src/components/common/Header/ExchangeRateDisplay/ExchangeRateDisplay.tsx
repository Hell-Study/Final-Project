import * as styled from './ExchangeRateDisplay.styles';
import type { IexchangeRate } from '../Header.types';

export const ExchangeRateDisplay = ({ exchangeRate }: IexchangeRate) => (
  <div>
    <styled.Label>환율(USD/KRW)</styled.Label>
    {exchangeRate ?? '로딩 중...'}
  </div>
);
