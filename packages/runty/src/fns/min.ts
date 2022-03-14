import { ReturnValues, VariableDictionary } from '../types';

export const min = <V extends VariableDictionary, R extends ReturnValues<V>>(vals: R[]): R => {
  return Math.min(...vals.map((val) => (val === '' ? Infinity : Number(val ?? Infinity)))) as R;
};
