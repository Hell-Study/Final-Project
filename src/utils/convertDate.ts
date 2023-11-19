export const convertDate = (value: number): string => {
  const date = new Date(value);
  const time = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
    2,
    '0',
  )}-${String(date.getDate()).padStart(2, '0')}`;
  return time;
};

export const replaceDate = (date: string): string =>
  `${date.slice(0, 4)}-${date.slice(4, 6)}-${date.slice(6, 8)}`;
