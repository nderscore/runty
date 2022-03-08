import { ReturnValues, VariableDictionary } from '../types';

export const low = <V extends VariableDictionary, R extends ReturnValues<V>>([str = '' as R]: R[]): R => {
  return String(str).toLowerCase() as R;
};
