export const rpt = ([str = '', count = 0]) => {
  const c = Number(count);

  if (isNaN(c) || c < 0) {
    return '';
  }

  return String(str).repeat(count);
};
