import type { IGlobalCoin } from '../Header.types';
import * as styled from './GlobalCoinLabel.styles';

export const GlobalCoinLabel: React.FC<IGlobalCoin> = ({
  label,
  value,
  change,
  isCurrency,
  isPercentage,
  exchangeRate,
}) => {
  const multiplyByExchangeRate = (value: number, exchangeRate: number) => {
    return exchangeRate ? value * exchangeRate : 0;
  };
  const formatCurrency = (value: number) => {
    if (value === null || value === undefined) {
      return '로딩 중...';
    }

    const trillion = Math.floor(value / 1e12);
    const billion = Math.floor((value % 1e12) / 1e8);

    if (trillion > 0) {
      return `${trillion}조 ${billion}억`;
    } else {
      return `${billion}억`;
    }
  };

  return (
    <div>
      <styled.Label>{label}</styled.Label>
      {isCurrency
        ? formatCurrency(multiplyByExchangeRate(value, exchangeRate!))
        : isPercentage
        ? `${value}%`
        : value?.toString() || '로딩 중...'}
      {change && (
        <styled.Rate $isPositive={change >= 0}>
          {(change >= 0 ? '+' : '-') + Math.abs(change).toString() + '%'}
        </styled.Rate>
      )}
    </div>
  );
};
