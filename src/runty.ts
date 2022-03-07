import { execute } from './execute';
import { parse } from './parse';
import type {
  DefaultVariableDictionary,
  ReturnValues,
  RuntyOptions,
  RuntyPartialOptions,
  VariableDictionary,
} from './types';

const DEFAULT_OPTIONS = {
  asArray: false,
  fns: {},
  maxDepth: 8,
};

const buildTree = <V extends VariableDictionary, R extends ReturnValues<V>>(
  options: RuntyPartialOptions<V, R>,
  template: string
) => {
  const opts: RuntyOptions<V, R> = {
    ...DEFAULT_OPTIONS,
    ...options,
  };
  return parse(template, opts);
};

export const string = <
  V extends VariableDictionary = DefaultVariableDictionary,
  R extends ReturnValues<V> = ReturnValues<V>
>(
  template: string,
  options: RuntyPartialOptions<V, R> = {}
) => {
  const tree = buildTree<V, R>(options, template);
  const result = (variables: V) => execute<V, R>(tree, variables).join('');
  return result;
};

export const array = <
  V extends VariableDictionary = DefaultVariableDictionary,
  R extends ReturnValues<V> = ReturnValues<V>
>(
  template: string,
  options: RuntyPartialOptions<V, R> = {}
) => {
  const tree = buildTree<V, R>(options, template);
  const result = (variables: V) => execute<V, R>(tree, variables);
  return result;
};

export const runty = {
  array,
  string,
};
