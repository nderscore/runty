export const cat = (vals: unknown[]) => {
  return String(vals.reduce((prev, next) => String(prev) + String(next)));
};
