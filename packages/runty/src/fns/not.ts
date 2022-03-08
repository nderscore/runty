import { ReturnValues, VariableDictionary } from '../types';

export const not = <V extends VariableDictionary, R extends ReturnValues<V>>([arg]: R[]): R => {
  return (arg === 0 ? false : !arg) as R;
};
