import { atom } from 'recoil';

export type GlobalCoinType = {
  coins_count: number;
  active_markets: number;
  total_mcap: number;
  total_volume: number;
  btc_d: number;
  mcap_change: number;
  volume_change: number;
};

export const globalCoinState = atom<GlobalCoinType[]>({
  key: 'globalCoinState',
  default: [],
});
