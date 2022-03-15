import { NestedValueOf, VariableDictionary } from '../types';

export const slc = <V extends VariableDictionary>([val = '', a = 0, bArg]: unknown[]) => {
  const b = bArg || bArg === 0 ? Number(bArg) : undefined;

  if (Array.isArray(val)) {
    return val.slice(Number(a), b) as NestedValueOf<V> & unknown[];
  }

  return String(val).slice(Number(a), b);
};
