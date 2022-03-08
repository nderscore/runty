import { ReturnValues, VariableDictionary } from '../types';

export const max = <V extends VariableDictionary, R extends ReturnValues<V>>(vals: R[]): R => {
  return Math.max(...vals.map((val) => (val === '' ? -Infinity : Number(val ?? -Infinity)))) as R;
};
