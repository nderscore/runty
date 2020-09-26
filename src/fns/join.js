export const join = ([arr, joinString = '']) => {
  if (!Array.isArray(arr)) {
    return '';
  }

  return arr.join(joinString);
};
