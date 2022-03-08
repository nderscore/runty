import { ReturnValues, VariableDictionary } from '../types';

export const idx = <V extends VariableDictionary, R extends ReturnValues<V>>([val = '' as R, search]: R[]): R => {
  if (Array.isArray(val)) {
    return val.indexOf(search) as R;
  }

  return (search !== undefined && search !== '' ? String(val).indexOf(String(search)) : -1) as R;
};
