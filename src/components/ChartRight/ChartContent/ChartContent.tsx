import { useEffect, useRef } from 'react';
import { useTheme } from 'styled-components';
import * as styled from './ChartContent.styles';
import { useCreateRightChart } from 'hooks';
import { createChart, CrosshairMode } from 'lightweight-charts';
import type { IChartApi, ISeriesApi } from 'lightweight-charts';

export const ChartContent = () => {
  const { processedData, updatedCandle } = useCreateRightChart();
  const theme = useTheme();

  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chart = useRef<IChartApi>();
  const newSeries = useRef<ISeriesApi<'Candlestick'>>();

  useEffect(() => {
    if (processedData.length > 0) {
      chart.current = createChart(chartContainerRef.current as HTMLElement, {
        layout: {
          background: {
            color: 'transparent',
          },
          textColor: theme.colors.text1,
        },
        height: 226,
        grid: {
          vertLines: {
            color: theme.colors.border2,
          },
          horzLines: {
            color: theme.colors.border2,
          },
        },
        crosshair: {
          mode: CrosshairMode.Normal,
        },
        leftPriceScale: {
          borderVisible: false,
        },
        rightPriceScale: {
          borderVisible: false,
          textColor: theme.colors.text1,
          scaleMargins: {
            top: 0.1,
            bottom: 0.1,
          },
        },
        timeScale: {
          borderVisible: false,
          fixLeftEdge: true,
          fixRightEdge: true,
        },
      });
      chart.current.timeScale().applyOptions({
        barSpacing: 8,
      });

      newSeries.current = chart.current.addCandlestickSeries({
        upColor: theme.colors.red,
        wickUpColor: theme.colors.red,
        downColor: theme.colors.blue,
        wickDownColor: theme.colors.blue,
        borderVisible: false,
      });

      newSeries.current?.setData(processedData);

      return () => {
        chart.current?.remove();
      };
    }
  }, [processedData, theme.colors]);

  useEffect(() => {
    if (updatedCandle && newSeries.current) {
      newSeries.current.update(updatedCandle);
    }
  }, [updatedCandle]);

  return <styled.ChartRefDiv ref={chartContainerRef}></styled.ChartRefDiv>;
};
