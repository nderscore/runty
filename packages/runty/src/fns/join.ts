export const join = ([arr, joinString = '']: unknown[]) => {
  if (!Array.isArray(arr)) {
    return '';
  }

  return arr.join(String(joinString));
};
