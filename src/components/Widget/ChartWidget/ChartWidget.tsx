import { createChart, ColorType, UTCTimestamp } from 'lightweight-charts';
import React, { useEffect, useRef } from 'react';
import { useChartTickers } from 'hooks';
import type { IWidgetTicker } from '../Widget.types';

interface IWidgetTickerProps {
  pairId: string;
  baseData?: IWidgetTicker;
}

export const ChartWidget: React.FC<IWidgetTickerProps> = ({
  pairId,
  baseData,
}) => {
  const chartContainerRef = useRef<HTMLDivElement | null>(null);
  const { data } = useChartTickers(pairId, 'PT1H');

  useEffect(() => {
    if (!chartContainerRef.current || !data || data.length === 0) return;
    const baselineValue = baseData?.value;

    const handleResize = () => {
      chart.applyOptions({ width: chartContainerRef.current?.clientWidth });
    };
    const chart = createChart(chartContainerRef.current as HTMLElement, {
      layout: {
        background: { type: ColorType.Solid, color: 'transparent' },
      },
      width: 72,
      height: 44,
      timeScale: {
        visible: false,
      },
      grid: {
        vertLines: {
          visible: false,
        },
        horzLines: {
          visible: false,
        },
      },
      rightPriceScale: {
        visible: false,
      },
      handleScroll: {
        mouseWheel: false,
        pressedMouseMove: false,
      },
      handleScale: {
        mouseWheel: false,
        pinch: false,
        axisPressedMouseMove: {
          time: false,
          price: false,
        },
      },
      crosshair: {
        vertLine: {
          visible: false,
        },
        horzLine: {
          visible: false,
        },
      },
    });

    const newSeries = chart.addBaselineSeries({
      baseValue: { type: 'price', price: baselineValue },
      lineWidth: 1,
      topLineColor: 'rgb( 239, 83, 80)',
      topFillColor1: 'rgba( 239, 83, 80, 0.03)',
      topFillColor2: 'rgba( 239, 83, 80, 0.4)',
      bottomLineColor: 'rgb(42,127,255)',
      bottomFillColor1: 'rgba( 42,127,255, 0.03)',
      bottomFillColor2: 'rgba(42,127,255,0.4)',
      crosshairMarkerVisible: false,
      priceLineVisible: false,
    });

    const convertedData = data.map((item) => ({
      time: item.time as UTCTimestamp,
      value: item.value,
    }));

    newSeries.setData(convertedData);

    const lineSeries = chart.addLineSeries({
      color: '#B2B5BE',
      priceLineVisible: false,
      lineWidth: 1,
      lineStyle: 2,
      crosshairMarkerVisible: false,
    });

    const lineData = data.map((item) => ({
      time: item.time as UTCTimestamp,
      value: baselineValue,
    }));

    chart.timeScale().fitContent();
    lineSeries.setData(lineData);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      chart.remove();
    };
  }, [data]);

  return <div ref={chartContainerRef} />;
};
