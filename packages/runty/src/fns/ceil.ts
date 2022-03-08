import { ReturnValues, VariableDictionary } from '../types';

export const ceil = <V extends VariableDictionary, R extends ReturnValues<V>>([val]: R[]): R => {
  return Math.ceil(val as number) as R;
};
