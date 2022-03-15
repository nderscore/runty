export const or = (conditions: unknown[]) => {
  return !!conditions.reduce((acc, next) => {
    return acc || next === 0 || !!next;
  }, false);
};
