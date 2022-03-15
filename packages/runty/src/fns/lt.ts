export const lt = ([a, b]: unknown[]) => {
  if (typeof a === 'number' || typeof b === 'number') {
    return Number(a) < Number(b);
  }

  if (typeof a === 'string' || typeof b === 'string') {
    return String(a) < String(b);
  }

  return a < b;
};
