import { ReturnValues, VariableDictionary } from '../types';

export const pl = <V extends VariableDictionary, R extends ReturnValues<V>>([
  val = '' as R,
  length = 0 as R,
  fillString = ' ' as R,
]: R[]): R => {
  return String(val).padStart(Number(length), String(fillString)) as R;
};
