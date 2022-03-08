import { ReturnValues, VariableDictionary } from '../types';

export const rpt = <V extends VariableDictionary, R extends ReturnValues<V>>([
  str = '' as R,
  count = 0 as R,
]: R[]): R => {
  const c = Number(count);

  if (isNaN(c) || c < 0) {
    return '' as R;
  }

  return String(str).repeat(Number(count)) as R;
};
