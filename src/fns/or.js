export const or = (conditions) => {
  return conditions.reduce((acc, next) => {
    return acc || next === 0 || !!next;
  }, false);
};
