import { ReturnValues, VariableDictionary } from '../types';

export const up = <V extends VariableDictionary, R extends ReturnValues<V>>([str = '' as R]: R[]): R => {
  return String(str).toUpperCase() as R;
};
