export const min = (vals: unknown[]) => {
  return Math.min(...vals.map((val) => (val === '' ? Infinity : Number(val ?? Infinity))));
};
