import type {
  DefaultVariableDictionary,
  ReturnValues,
  RuntyArrayTemplate,
  RuntyOptions,
  RuntyPartialOptions,
  RuntyStringTemplate,
  VariableDictionary,
} from './types';
import { execute } from './execute';
import { parse } from './parse';

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
  options: RuntyPartialOptions<V, ReturnValues<V>> = {}
) => {
  const tree = buildTree(options, template);
  const result: RuntyStringTemplate<V> = (variables = {} as V) => execute<V, R>(tree, variables).join('');
  return result;
};

export const array = <
  V extends VariableDictionary = DefaultVariableDictionary,
  R extends ReturnValues<V> = ReturnValues<V>
>(
  template: string,
  options: RuntyPartialOptions<V, R> = {}
) => {
  const tree = buildTree(options, template);
  const result: RuntyArrayTemplate<V, R> = (variables = {} as V) => execute<V, R>(tree, variables);
  return result;
};

export const runty = {
  array,
  string,
};
