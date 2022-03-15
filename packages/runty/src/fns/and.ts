export const and = (conditions: unknown[]) => {
  return !!conditions.reduce((acc, next) => {
    return acc && (next === 0 || !!next);
  }, conditions.length > 0);
};
