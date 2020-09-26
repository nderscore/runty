export const len = ([val = '']) => {
  if (Array.isArray(val)) {
    return val.length;
  }

  return String(val).length;
};
