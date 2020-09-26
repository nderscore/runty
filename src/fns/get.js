import { getterFn } from '../constants';

export const get = ([object, ...properties]) => {
  return object ? getterFn(properties, object) : '';
};
