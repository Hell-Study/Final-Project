export const judgeColor = (num: number) => {
  if (num > 0) {
    return 'RISE';
  } else if (num < 0) {
    return 'FALL';
  } else {
    return 'EVEN';
  }
};
