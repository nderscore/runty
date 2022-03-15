export const rpl = ([haystack = '', search = '', replacementString = '']: unknown[]) => {
  const searchRegex = new RegExp(String(search).replace(/[\^$\\.*+?()[\]{}|]/g, '\\$&'), 'g');
  return String(haystack).replace(searchRegex, String(replacementString));
};
