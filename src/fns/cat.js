export const cat = (vals) => {
  return vals.reduce((prev, next) => String(prev) + String(next));
};
