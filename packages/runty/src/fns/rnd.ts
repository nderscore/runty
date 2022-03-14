import { ReturnValues, VariableDictionary } from '../types';

export const rnd = <V extends VariableDictionary, R extends ReturnValues<V>>([val]: R[]): R => {
  return Math.round(Number(val)) as R;
};
