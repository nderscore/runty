export const slc = ([val = '', a = 0, b]) => {
  if (Array.isArray(val)) {
    return val.slice(a, b);
  }

  return String(val).slice(a, b);
};
