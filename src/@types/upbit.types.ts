export interface IUpbitTicker {
  code: string;
  change: string;
  trade_price: number;
  opening_price: number;
  signed_change_rate: number;
  signed_change_price: number;
  highest_52_week_price: number;
  lowest_52_week_price: number;
  acc_trade_price_24h: number;
  acc_trade_volume_24h: number;
  trade_date: string;
  binancePrice?: string;
}

export interface IUpbitMarketCode {
  market: string;
  korean_name: string;
  english_name: string;
}

export interface IUpbitFetchDayCandle {
  market: string;
  candle_date_time_utc: string;
  candle_date_time_kst: string;
  opening_price: number;
  high_price: number;
  low_price: number;
  trade_price: number;
  timestamp: number;
  candle_acc_trade_price: number;
  candle_acc_trade_volume: number;
  prev_closing_price: number;
  change_price: number;
  change_rate: number;
}
