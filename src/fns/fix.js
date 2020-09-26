export const fix = ([val, digits = 0]) => {
  return Number(val).toFixed(digits);
};
