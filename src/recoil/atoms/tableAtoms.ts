import type { ITicker } from '../../@types/common.types';
import { atom } from 'recoil';

export const tableSortValueState = atom<string>({
  key: 'tableSortState',
  default: '거래액(일)',
});

export const tableSortUpDownState = atom<boolean>({
  key: 'tableUpDownState',
  default: false,
});

export const selectedCoinState = atom<string>({
  key: 'selectedCoinState',
  default: 'BTC',
});

export const selectedCoinInfoState = atom<ITicker | null>({
  key: 'selectedCoinInfoState',
  default: null,
});

export const searchCoinState = atom<string>({
  key: 'searchCoinState',
  default: '',
});
