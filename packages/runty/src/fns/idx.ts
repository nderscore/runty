export const idx = ([val = '', search]: unknown[]) => {
  if (Array.isArray(val)) {
    return val.indexOf(search);
  }

  return search !== undefined && search !== '' ? String(val).indexOf(String(search)) : -1;
};
