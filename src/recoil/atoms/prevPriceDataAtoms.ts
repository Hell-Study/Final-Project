import { atom } from 'recoil';
import type { IWidgetTicker } from 'components/Widget/Widget.types';

export const prevPriceDataState = atom<IWidgetTicker | null>({
  key: 'prevPriceDataState',
  default: null,
});
