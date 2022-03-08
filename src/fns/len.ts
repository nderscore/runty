import { ReturnValues, VariableDictionary } from '../types';

export const len = <V extends VariableDictionary, R extends ReturnValues<V>>([val = '' as R]: R[]): R => {
  if (Array.isArray(val)) {
    return val.length as R;
  }

  return String(val).length as R;
};
