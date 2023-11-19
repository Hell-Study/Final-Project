export const getFormattedValues = (current: number, prev: number) => {
  const diff = current - prev;
  const percent = (diff / prev) * 100;

  const formattedDiff =
    diff >= 0 ? `+${diff.toFixed(2)}` : `-${Math.abs(diff).toFixed(2)}`;

  return {
    diff: formattedDiff,
    percent: Math.abs(percent).toFixed(2),
  };
};
