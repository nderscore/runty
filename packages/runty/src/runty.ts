import { execute } from './execute';
import { parse } from './parse';
import type { RuntyOptions, RuntyPartialOptions, VariableDictionary } from './types';

const DEFAULT_OPTIONS = {
  asArray: false,
  fns: {},
  maxDepth: 8,
};

export const string = <V extends VariableDictionary = VariableDictionary>(
  template: string,
  options: RuntyPartialOptions<V> = {}
) => {
  const opts: RuntyOptions<V> = {
    ...DEFAULT_OPTIONS,
    ...options,
  };
  const tree = parse<V>(template, opts);
  const result = (variables: V) => execute<V, typeof options['fns']>(tree, variables).join('');
  return result;
};

export const array = <V extends VariableDictionary = VariableDictionary>(
  template: string,
  options: RuntyPartialOptions<V> = {}
) => {
  const opts: RuntyOptions<V> = {
    ...DEFAULT_OPTIONS,
    ...options,
  };
  const tree = parse<V>(template, opts);
  const result = (variables: V) => execute<V, typeof options['fns']>(tree, variables);
  return result;
};

export const runty = {
  array,
  string,
};
