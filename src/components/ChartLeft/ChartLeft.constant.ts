import ubit from 'assets/images/upbit.svg';
import binance from 'assets/images/binance.svg';
import bithumb from 'assets/images/bithumb.svg';
import btc from 'assets/images/btc.svg';
import usdt from 'assets/images/usdt.svg';

export const SELECT_OPTION = [
  {
    key: 'BINANCE',
    value: 'BINANCE',
    title: '비트코인 - Binance',
    symbol: binance,
  },
  {
    key: 'UPBIT',
    value: 'UPBIT',
    title: '비트코인 김치프리미엄 Ubit',
    symbol: ubit,
  },
  {
    key: 'BITHUMB',
    value: 'BITHUMB',
    title: '비트코인 김치프리미엄 Bithumb',
    symbol: bithumb,
  },
];

export const TRADING_VIEW_SYMBOLS = {
  BINANCE: 'BINANCE:BTCUSDT',
  UPBIT:
    '(BINANCE:BTCUSD/BINANCE:BTCUSD*UPBIT:BTCKRW-BINANCE:BTCUSDT*FX_IDC:USDKRW)/(BINANCE:BTCUSD*FX_IDC:USDKRW)*100',
  BITHUMB:
    '(BINANCE:BTCUSD/BINANCE:BTCUSD*BITHUMB:BTCKRW-BINANCE:BTCUSDT*FX_IDC:USDKRW)/(BINANCE:BTCUSD*FX_IDC:USDKRW)*100',
};

export const TRADING_VIEW_TICKERS = {
  BINANCE: {
    name: 'Bitcoin / TetherUS',
    ticker: 'BTCUSDT',
    symbol1: btc,
    symbol2: usdt,
  },
  UPBIT: {
    name: '비트코인 김치프리미엄',
    ticker: 'Upbit',
    symbol1: btc,
    symbol2: ubit,
  },
  BITHUMB: {
    name: '비트코인 김치프리미엄',
    ticker: 'Bithumb',
    symbol1: btc,
    symbol2: bithumb,
  },
};
