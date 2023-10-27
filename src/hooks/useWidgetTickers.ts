import { useQuery, UseQueryResult } from 'react-query';
import { Interval, PAIR_DATA } from 'components/Widget/Widget.constants';
import getTickerWidgetData from 'api/getTickerWidgetData';

interface ITicker {
  time: number;
  value: number;
}

const setRefetchInterval = (interval: Interval): number | false => {
  switch (interval) {
    case 'PT1M':
      return 60 * 1000;
    case 'PT5M':
      return 5 * 60 * 1000;
    case 'P1D':
      return 24 * 60 * 60 * 1000;
    default:
      return false;
  }
};

export const useWidgetTickers = (
  pairId: string,
  interval: Interval,
  type: 'current' | 'previous' = 'current',
): UseQueryResult<ITicker, Error> => {
  return useQuery(
    [pairId, interval, type],
    () => getTickerWidgetData(pairId, interval, type),
    {
      refetchInterval: setRefetchInterval(interval),
    },
  );
};
