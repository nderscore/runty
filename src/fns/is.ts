import { ReturnValues, VariableDictionary } from '../types';

export const is = <V extends VariableDictionary, R extends ReturnValues<V>>([a, b]: R[]): R => {
  return Object.is(a, b) as R;
};
