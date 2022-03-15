export const max = (vals: unknown[]) => {
  return Math.max(...vals.map((val) => (val === '' ? -Infinity : Number(val ?? -Infinity))));
};
