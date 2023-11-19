export const convertMillonWon = (value: number) => {
  const MILLION = 1000000;
  const extractedValue = value / MILLION;
  return extractedValue;
};
