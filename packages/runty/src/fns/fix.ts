export const fix = ([val, digits = 0]: unknown[]) => {
  return Number(val).toFixed(Number(digits));
};
