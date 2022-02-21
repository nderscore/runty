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

export enum MODES {
  EXPRESSION,
  FUNCTION,
  IF,
  ELSE,
  TOP,
}

export const CONDITION = Symbol('RuntyCondition');

export enum RSyntaxErrorType {
  EXPECTED_END = "Expected end of expression '}' or beginning of conditional expression '?'",
  INVALID_EXPRESSION = 'Invalid expression. Expected a valid variable or function',
  INVALID_FUNCTION = 'Invalid function name',
  NESTING_DEPTH = 'Maximum nesting depth exceeded',
  UNTERMINATED_EXPRESSION = 'Unterminated expression',
  UNTERMINATED_FUNCTION = "Unterminated function. Expected an argument or ')'",
}

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

export const getterFn = (propertyNames, variables) => {
  return propertyNames.reduce((acc, next) => acc[next] ?? '', variables);
};
