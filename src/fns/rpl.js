export const rpl = ([haystack = '', search = '', replacementString = '']) => {
  const searchRegex = new RegExp(String(search).replace(/[\^$\\.*+?()[\]{}|]/g, '\\$&'), 'g');
  return String(haystack).replace(searchRegex, replacementString);
};
