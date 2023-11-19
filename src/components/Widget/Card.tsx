import React, { Suspense, memo } from 'react';
import { useWidgetTickers } from 'hooks';
import { ChartWidget } from './ChartWidget';
import { TickerWidget } from './TickerWidget';
import type { CardProps } from './Widget.types';
import * as styled from './Widget.styles';

export const Card = memo(({ ticker, id }: CardProps) => {
  const { data: baseData } = useWidgetTickers(id, 'P1D', 'previous');
  if (!baseData) {
    return null;
  }
  return (
    <styled.Card>
      <styled.TickerRow>
        <styled.Ticker>{ticker}</styled.Ticker>
        <Suspense fallback={<styled.SkeletonTicker />}>
          <TickerWidget pairId={id} baseData={baseData} />
        </Suspense>
      </styled.TickerRow>
      <styled.ChartRow>
        <Suspense fallback={<styled.SkeletonChart />}>
          <ChartWidget pairId={id} baseData={baseData} />
        </Suspense>
      </styled.ChartRow>
    </styled.Card>
  );
});

Card.displayName = 'Card';
