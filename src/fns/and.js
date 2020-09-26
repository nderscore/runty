export const and = (conditions) => {
  return conditions.reduce((acc, next) => {
    return acc && (next === 0 || !!next);
  }, conditions.length > 0);
};
