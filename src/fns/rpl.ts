import { ReturnValues, VariableDictionary } from '../types';

export const rpl = <V extends VariableDictionary, R extends ReturnValues<V>>([
  haystack = '' as R,
  search = '' as R,
  replacementString = '' as R,
]: R[]): R => {
  const searchRegex = new RegExp(String(search).replace(/[\^$\\.*+?()[\]{}|]/g, '\\$&'), 'g');
  return String(haystack).replace(searchRegex, String(replacementString)) as R;
};
