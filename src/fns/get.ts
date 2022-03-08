import { getterFn } from '../constants';
import { ReturnValues, VariableDictionary } from '../types';

export const get = <V extends VariableDictionary, R extends ReturnValues<V>>([object, ...properties]: R[]): R => {
  return object ? (getterFn<V, R>(properties, object as V) as R) : ('' as R);
};
