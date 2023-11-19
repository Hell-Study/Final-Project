import { atom } from 'recoil';

export const baseExchangeState = atom<string>({
  key: 'baseExchangeState',
  default: 'upbit',
});

export const modalIsOpenState = atom<boolean>({
  key: 'modalIsOpenState',
  default: true,
});

export const marketCodesState = atom<string[]>({
  key: 'marketCodesState',
  default: [],
});
