import { useRecoilValue } from 'recoil';
import { selectState } from 'recoil/atoms/selectStateAtoms';
import { TRADING_VIEW_TICKERS } from '../ChartLeft.constant';
import * as styled from '../ChartLeft.styles';

export const ChartInfo = () => {
  const selectedOption = useRecoilValue(selectState);
  const tickerInfo = getTradingViewTicker(selectedOption);

  return (
    <styled.ChartInfo>
      <styled.SymbolWrapper>
        <styled.SymbolGroup>
          <styled.SymbolOutline1>
            <styled.Symbol src={tickerInfo.symbol1} alt="Symbol 1" />
          </styled.SymbolOutline1>
          <styled.SymbolOutline2>
            <styled.Symbol src={tickerInfo.symbol2} alt="Symbol 2" />
          </styled.SymbolOutline2>
        </styled.SymbolGroup>
      </styled.SymbolWrapper>
      <styled.ChartInfoWrapper>
        <styled.ChartName>{tickerInfo.name} </styled.ChartName>
        <styled.ChartTicker>/{tickerInfo.ticker}</styled.ChartTicker>
      </styled.ChartInfoWrapper>
    </styled.ChartInfo>
  );

  function getTradingViewTicker(exchange: string) {
    if (exchange in TRADING_VIEW_TICKERS) {
      return TRADING_VIEW_TICKERS[
        exchange as keyof typeof TRADING_VIEW_TICKERS
      ];
    }
    return TRADING_VIEW_TICKERS.BINANCE;
  }
};
