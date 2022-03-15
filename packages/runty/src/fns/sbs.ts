export const sbs = ([str = '', a = 0, b = 0]: unknown[]) => {
  return String(str).substr(Number(a), Number(b));
};
