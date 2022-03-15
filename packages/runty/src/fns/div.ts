export const div = (vals: unknown[]) => {
  if (vals.length === 0) return NaN;
  return Number(vals.reduce((prev, next) => Number(prev) / Number(next)));
};
