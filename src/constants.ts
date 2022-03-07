import { ReturnValues, RSyntaxErrorType, VariableDictionary } from './types';

export const TOKENS = {
  ELSE_START: /^:/,
  EXPRESSION_END: /^\}/,
  IF_START: /^\?/,
  EXPRESSION_START: /^\{/,
  FUNCTION_START: /^\$([$\w]+)\(/,
  FUNCTION_SEPARATOR: /^,/,
  FUNCTION_END: /^\)/,
  STRING_IF: /^(?:\\.|[^{}:])*/,
  STRING_ELSE: /^(?:\\.|[^{}])*/,
  STRING_FUNCTION: /^(?:\\.|[^,)])*/,
  STRING_OUTER: /^(?:\\.|[^{])*/,
  VARIABLE: /^%([$\w]+(?:\.\w+)*)/,
};

export class RSyntaxError extends Error {
  public type: RSyntaxErrorType;
  public rest?: string;
  public value?: string;

  constructor(type: RSyntaxErrorType, rest?: string, value?: string) {
    const message = `${type}${value !== undefined ? ` (${value})` : ''}${rest ? ` near "${rest.slice(0, 10)}"` : ''}`;

    super(message);

    this.type = type;
    this.rest = rest;
    this.value = value;
  }
}

export const stripEscapes = (str: string) => str.replace(/\\(.)/g, '$1');

export const getterFn = <V extends VariableDictionary, R extends ReturnValues<V>>(
  propertyNames: R[],
  variables: V
): R => {
  if (propertyNames.length === 0) {
    return '' as R;
  }
  return propertyNames.reduce((acc, next) => acc?.[String(next)] ?? '', variables) as R;
};
