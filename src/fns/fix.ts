import { ReturnValues, VariableDictionary } from '../types';

export const fix = <V extends VariableDictionary, R extends ReturnValues<V>>([val, digits = 0 as R]: R[]): R => {
  return Number(val).toFixed(Number(digits)) as R;
};
