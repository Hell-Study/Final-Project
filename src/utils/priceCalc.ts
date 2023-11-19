// 공통
// 김프
export const binancePriceToKRW = (
  binancePrice: number,
  myExchangeRate: number,
) => binancePrice * myExchangeRate;

// 김프 비율
export const kimchiPremiumRatio = (
  nowPrice: number,
  binancePrice: number,
  myExchangeRate: number,
) => (nowPrice / (binancePrice * myExchangeRate) - 1) * 100;

// 김프와 국내 거래소 가격 차이
export const kimchiPremiumDiff = (
  nowPrice: number,
  binancePrice: number,
  myExchangeRate: number,
) => nowPrice - binancePrice * myExchangeRate;

// 업비트
// 고가 대비 증감률(52주)
export const highest_52_week_rate = (
  trade_price: number,
  highest_52_week_price: number,
) => (trade_price / highest_52_week_price - 1) * 100;

// 저가 대비 증감률(52주)
export const lowest_52_week_rate = (
  trade_price: number,
  lowest_52_week_price: number,
) => (trade_price / lowest_52_week_price - 1) * 100;

// 빗썸
// 전일 대비 증감률
export const changesRatio = (
  closing_price: string,
  prev_closing_price: string,
) =>
  ((Number(closing_price) - Number(prev_closing_price)) /
    Number(prev_closing_price)) *
  100;

// 전일 대비
export const changes = (closing_price: string, prev_closing_price: string) =>
  Number(closing_price) - Number(prev_closing_price);

// 고가 대비 증감률(전일)
export const highRatio = (closing_price: string, max_price: string) =>
  ((Number(closing_price) - Number(max_price)) / Number(max_price)) * 100;

// 저가 대비 증감률(전일)
export const lowRatio = (closing_price: string, min_price: string) =>
  ((Number(closing_price) - Number(min_price)) / Number(min_price)) * 100;
