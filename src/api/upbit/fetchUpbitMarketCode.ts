import type { IUpbitMarketCode } from '../../@types/upbit.types';

export const fetchUpbitMarketCode = async (): Promise<IUpbitMarketCode[]> => {
  const REST_API_URL = 'https://api.upbit.com/v1/market/all?isDetails=false';

  try {
    const cachedData = sessionStorage.getItem('upbitMarketCodes');
    if (cachedData) {
      return JSON.parse(cachedData);
    }
    const response = await fetch(REST_API_URL);
    if (!response.ok) {
      throw new Error('API를 불러올 수 없습니다!');
    }
    const json = await response.text(); // 텍스트 형식으로 추출

    const marketCodes: IUpbitMarketCode[] = JSON.parse(json).filter(
      (code: IUpbitMarketCode) => {
        return code.market.includes('KRW');
      },
    ); // 텍스트 데이터를 객체로 변환 후 원화만 필터링

    sessionStorage.setItem('upbitMarketCodes', JSON.stringify(marketCodes));

    return marketCodes;
  } catch (error) {
    console.error('API를 불러오는 중 에러 발생!', error);
    throw error;
  }
};
