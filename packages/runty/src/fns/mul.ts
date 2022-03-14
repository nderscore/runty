import { ReturnValues, VariableDictionary } from '../types';

export const mul = <V extends VariableDictionary, R extends ReturnValues<V>>(vals: R[]): R => {
  if (vals.length === 0) return NaN as R;
  return Number((vals as unknown[]).reduce((prev, next) => Number(prev) * Number(next))) as R;
};
