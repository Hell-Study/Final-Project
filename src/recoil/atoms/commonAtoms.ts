import { atom, selector } from 'recoil';

export const baseExchangeState = atom<string>({
  key: 'baseExchangeState',
  default: 'upbit',
});

export const modalIsOpenState = atom<boolean>({
  key: 'modalIsOpenState',
  default: false,
});

export const modalIsOpenSelector = selector({
  key: 'modalIsOpenSelector',
  get: ({ get }) => {
    const modalIsOpen = get(modalIsOpenState);
    return modalIsOpen;
  },
});

export const marketCodesState = atom<string[]>({
  key: 'marketCodesState',
  default: [],
});
