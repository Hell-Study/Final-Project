import { useEffect, useRef } from 'react';
import { useRecoilValue } from 'recoil';
import { selectState } from 'recoil/atoms/selectStateAtoms';
import { TRADING_VIEW_SYMBOLS } from '../ChartLeft.constant';
import { themeState } from 'recoil/atoms/themeAtoms';
import { useTheme } from 'styled-components';
import * as styled from '../ChartLeft.styles';
declare global {
  interface Window {
    TradingView: any;
  }
}

let tvScriptLoadingPromise: Promise<void> | undefined;

export function TradingViewWidget() {
  const currentTheme = useRecoilValue(themeState);
  const selectedOption = useRecoilValue(selectState);
  const onLoadScriptRef = useRef<null | (() => void)>(null);
  const theme = useTheme();

  useEffect(() => {
    onLoadScriptRef.current = createWidget;

    if (!tvScriptLoadingPromise) {
      tvScriptLoadingPromise = new Promise<void>((resolve) => {
        const script = document.createElement('script');
        script.id = 'tradingview-widget-loading-script';
        script.src = 'https://s3.tradingview.com/tv.js';
        script.type = 'text/javascript';
        script.onload = () => resolve();

        document.head.appendChild(script);
      });
    }

    tvScriptLoadingPromise.then(() => {
      if (onLoadScriptRef.current) {
        onLoadScriptRef.current();
      }
    });

    return () => {
      onLoadScriptRef.current = null;
    };

    function createWidget() {
      if (
        document.getElementById('tradingview_0e511') &&
        'TradingView' in window
      ) {
        new window.TradingView.widget({
          autosize: true,
          symbol: getTradingViewSymbol(selectedOption),
          width: '100%',
          height: '100%',
          interval: '15',
          timezone: 'Asia/Seoul',
          theme: currentTheme === 'light' ? 'light' : 'dark',
          style: '1',
          locale: 'kr',
          enable_publishing: false,
          hide_top_toolbar: true,
          hide_legend: true,
          save_image: false,
          hide_volume: true,
          backgroundColor: theme.colors.bg_element4,
          container_id: 'tradingview_0e511',
        });
      }
    }

    function getTradingViewSymbol(exchange: string) {
      if (exchange in TRADING_VIEW_SYMBOLS) {
        return TRADING_VIEW_SYMBOLS[
          exchange as keyof typeof TRADING_VIEW_SYMBOLS
        ];
      }
      return TRADING_VIEW_SYMBOLS.BINANCE;
    }
  }, [selectedOption, currentTheme]);

  return (
    <styled.WidgetContainer>
      <styled.Chart id="tradingview_0e511" />
    </styled.WidgetContainer>
  );
}
