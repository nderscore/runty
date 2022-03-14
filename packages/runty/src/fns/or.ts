import { ReturnValues, VariableDictionary } from '../types';

export const or = <V extends VariableDictionary, R extends ReturnValues<V>>(conditions: R[]): R => {
  return conditions.reduce((acc, next) => {
    return acc || next === 0 || !!next;
  }, false) as R;
};
