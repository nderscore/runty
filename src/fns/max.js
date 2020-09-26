export const max = (vals) => {
  return Math.max(...vals.map((val) => (val === '' ? -Infinity : Number(val ?? -Infinity))));
};
