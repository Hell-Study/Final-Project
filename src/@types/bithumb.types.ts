export interface IBithumbWsTicker {
  volumePower: string;
  chgAmt: string;
  chgRate: string;
  prevClosePrice: string;
  buyVolume: string;
  sellVolume: string;
  volume: string;
  value: string;
  highPrice: string;
  lowPrice: string;
  closePrice: string;
  openPrice: string;
  time: string;
  date: string;
  tickType: string;
  symbol: string;
}

export type IBithumbFetchCandlestick = [
  number,
  string,
  string,
  string,
  string,
  string,
];
