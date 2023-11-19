export const PAIR_DATA = {
  'S&P 500': { id: '1175153', intervals: ['PT1M', 'PT1H', 'P1D'] },
  NASDAQ: { id: '1175151', intervals: ['PT1M', 'PT1H', 'P1D'] },
  KOSPI: { id: '37426', intervals: ['PT5M', 'PT1H', 'P1D'] },
  KOSDAQ: { id: '38016', intervals: ['PT1M', 'PT1H', 'P1D'] },
  '금 선물': { id: '8830', intervals: ['PT1M', 'PT1H', 'P1D'] },
  '원유 선물': { id: '8849', intervals: ['PT1M', 'PT1H', 'P1D'] },
};

export const validInterval = ['PT1M', 'PT5M', 'PT1H', 'P1D'] as const;
export type Interval = (typeof validInterval)[number];
