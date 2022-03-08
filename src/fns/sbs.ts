import { ReturnValues, VariableDictionary } from '../types';

export const sbs = <V extends VariableDictionary, R extends ReturnValues<V>>([
  str = '' as R,
  a = 0 as R,
  b = 0 as R,
]: R[]): R => {
  return String(str).substr(Number(a), Number(b)) as R;
};
