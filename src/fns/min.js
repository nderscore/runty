export const min = (vals) => {
  return Math.min(...vals.map((val) => (val === '' ? Infinity : Number(val ?? Infinity))));
};
