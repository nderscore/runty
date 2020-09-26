export const idx = ([val = '', search]) => {
  if (Array.isArray(val)) {
    return val.indexOf(search);
  }

  return search !== undefined && search !== '' ? String(val).indexOf(search) : -1;
};
