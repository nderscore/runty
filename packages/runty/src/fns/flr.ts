import { ReturnValues, VariableDictionary } from '../types';

export const flr = <V extends VariableDictionary, R extends ReturnValues<V>>([val]: R[]): R => {
  return Math.floor(Number(val)) as R;
};
