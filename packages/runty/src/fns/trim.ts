import { ReturnValues, VariableDictionary } from '../types';

export const trim = <V extends VariableDictionary, R extends ReturnValues<V>>([val = '' as R]: R[]): R => {
  return String(val).trim() as R;
};
