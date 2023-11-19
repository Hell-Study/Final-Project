export interface IexchangeRate {
  exchangeRate?: number;
}

export interface IGlobalCoin extends IexchangeRate {
  label: string;
  value: number;
  change?: number;
  isCurrency?: boolean;
  isPercentage?: boolean;
}
