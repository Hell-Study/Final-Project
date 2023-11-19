import { useQuery } from 'react-query';
import { Interval } from 'components/Widget/Widget.constants';
import getChartWidgetData from 'api/getChartWidgetData';

export const useChartTickers = (pairId: string, interval: Interval) => {
  return useQuery(
    [pairId, interval],
    () => getChartWidgetData(pairId, interval),
    {
      refetchInterval: 60 * 60 * 1000,
    },
  );
};
