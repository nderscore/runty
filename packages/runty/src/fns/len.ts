export const len = ([val = '']: unknown[]) => {
  if (Array.isArray(val)) {
    return val.length;
  }

  return String(val).length;
};
