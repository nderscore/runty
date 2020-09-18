export const gte = ([a, b]) => {
  if (typeof a === 'number' || typeof b === 'number') {
    return Number(a) >= Number(b);
  }

  if (typeof a === 'string' || typeof b === 'string') {
    return String(a) >= String(b);
  }

  return a >= b;
};
