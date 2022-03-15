import { getterFn } from '../constants';
import { VariableDictionary } from '../types';

export const get = <V extends VariableDictionary>([object, ...properties]: unknown[]) => {
  return object ? getterFn<V>(properties, object as V) : '';
};
