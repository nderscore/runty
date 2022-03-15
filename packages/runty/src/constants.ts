import { NestedValueOf, VariableDictionary } from './types';

export const TOKENS = {
  ELSE_START: ':',
  EXPRESSION_END: '}',
  IF_START: '?',
  EXPRESSION_START: '{',
  FUNCTION_START: /^\$([$\w]+)\(/,
  FUNCTION_SEPARATOR: ',',
  FUNCTION_END: ')',
  STRING_IF: /^(?:\\[{}:]|[^{}:])*/,
  STRING_ELSE: /^(?:\\[{}]|[^{}])*/,
  STRING_FUNCTION: /^(?:\\[,)]|[^,)])*/,
  STRING_OUTER: /^(?:\\\{|[^{])*/,
  VARIABLE: /^%([$\w]+(?:\.[$\w]+)*)/,
};

export const stripEscapes = (str: string) => str.replace(/\\(.)/g, '$1');

export const getterFn = <V extends VariableDictionary>(propertyNames: unknown[], variables: V) => {
  if (propertyNames.length === 0) {
    return '';
  }
  return propertyNames.reduce((acc, next) => acc?.[String(next)] ?? '', variables) as NestedValueOf<V>;
};
