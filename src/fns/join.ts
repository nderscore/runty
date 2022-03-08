import { ReturnValues, VariableDictionary } from '../types';

export const join = <V extends VariableDictionary, R extends ReturnValues<V>>([arr, joinString = '' as R]: R[]): R => {
  if (!Array.isArray(arr)) {
    return '' as R;
  }

  return arr.join(String(joinString)) as R;
};
