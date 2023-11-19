export interface ITicker {
  symbol: string; // 마켓 코드
  coinName: string; // 코인명
  thumbnail: string; // 썸네일
  tradePrice: number; // 현재가
  openingPrice: number; // 시가
  changeRatio: number; // 전일 대비 등락율
  changePrice: number; // 전일 대비 값
  highestRatio: number; // 고가대비 비율
  highestPrice: number; // 고가
  lowestRatio: number; // 저가대비 비율
  lowestPrice: number; // 저가
  tradeValue_24H: number; // 24시간 누적 거래대금
  date: string; // 거래 일자
  binancePrice?: number; // 바이낸스 가격
}
