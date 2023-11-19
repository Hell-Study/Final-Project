import React, { useState, useRef, useEffect, memo } from 'react';
import { useWidgetTickers } from 'hooks';
import { PAIR_DATA, Interval } from 'components/Widget/Widget.constants';
import { getFormattedValues } from 'utils';
import { formatNumber } from 'utils';
import type { IWidgetTicker } from '../Widget.types';
import * as styled from '../Widget.styles';

interface IWidgetTickerProps {
  pairId: string;
  baseData?: IWidgetTicker;
}

export const TickerWidget: React.FC<IWidgetTickerProps> = memo(
  ({ pairId, baseData }: IWidgetTickerProps) => {
    const validInterval =
      Object.values(PAIR_DATA).find((p) => p.id === pairId)?.intervals || [];
    const currentInterval: Interval = validInterval.includes('PT1M')
      ? 'PT1M'
      : 'PT5M';
    const { data: currentData } = useWidgetTickers(
      pairId,
      currentInterval,
      'current',
    );

    const prevData = useRef<IWidgetTicker | null>(currentData!);

    const [highlight, setHighlight] = useState<'increase' | 'decrease' | null>(
      null,
    );

    useEffect(() => {
      if (currentData) {
        prevData.current = currentData;
      }
    }, [currentData]);

    useEffect(() => {
      if (
        changeRateCurrent === 'increase' ||
        changeRateCurrent === 'decrease'
      ) {
        setHighlight(changeRateCurrent);
        const timer = setTimeout(() => {
          setHighlight(null);
        }, 150);

        return () => clearTimeout(timer);
      }
    }, [currentData]);

    const getChangeRate = (
      currentData?: IWidgetTicker | null,
      prevData?: IWidgetTicker | null,
    ): 'increase' | 'decrease' | '' => {
      if (!currentData || !prevData) return '';
      if (currentData.value > prevData.value) return 'increase';
      if (currentData.value < prevData.value) return 'decrease';
      return '';
    };

    const changeRateCurrent = getChangeRate(currentData, prevData.current);
    const changeRatePrev = getChangeRate(currentData, baseData);

    if (!currentData || !baseData) return null;

    const { diff, percent } = getFormattedValues(
      currentData.value,
      baseData.value,
    );

    return (
      <styled.Price>
        <styled.Nowprice $highlight={highlight}>
          {formatNumber(parseFloat(currentData.value.toFixed(2)))}
        </styled.Nowprice>
        <styled.DiffPrice
          $isIncrease={changeRatePrev === 'increase'}
          $isDecrease={changeRatePrev === 'decrease'}
        >
          <styled.Perc>
            {changeRatePrev === 'increase' ? (
              <styled.CaretUpSVG />
            ) : (
              <styled.CaretDownSVG />
            )}{' '}
            {percent}%{' '}
          </styled.Perc>
          <styled.Change>{diff}</styled.Change>
        </styled.DiffPrice>
      </styled.Price>
    );
  },
);

TickerWidget.displayName = 'TickerWidget';
