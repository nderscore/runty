import { ReturnValues, VariableDictionary } from '../types';

export const gt = <V extends VariableDictionary, R extends ReturnValues<V>>([a, b]: R[]): R => {
  if (typeof a === 'number' || typeof b === 'number') {
    return (Number(a) > Number(b)) as R;
  }

  if (typeof a === 'string' || typeof b === 'string') {
    return (String(a) > String(b)) as R;
  }

  return (a > b) as R;
};
