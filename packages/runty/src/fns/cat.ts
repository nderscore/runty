import { ReturnValues, VariableDictionary } from '../types';

export const cat = <V extends VariableDictionary, R extends ReturnValues<V>>(vals: R[]): R => {
  return (vals as unknown[]).reduce((prev, next) => String(prev) + String(next)) as R;
};
