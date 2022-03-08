import { ReturnValues, VariableDictionary } from '../types';

export const slc = <V extends VariableDictionary, R extends ReturnValues<V>>([
  val = '' as R,
  a = 0 as R,
  bArg,
]: R[]): R => {
  const b = bArg || bArg === 0 ? Number(bArg) : undefined;

  if (Array.isArray(val)) {
    return val.slice(Number(a), b) as R;
  }

  return String(val).slice(Number(a), b) as R;
};
