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

export const MODES = {
  EXPRESSION: 'EXPRESSION',
  FUNCTION: 'FUNCTION',
  IF: 'IF',
  ELSE: 'ELSE',
  TOP: 'TOP',
};

export const CONDITION = { RUNTY_CONDITION: null };

export class RSyntaxError extends Error {
  constructor(type, rest, value) {
    const message = `Runty Syntax Error: ${type} ${rest ? `near "${rest.slice(0, 10)}" ` : ''}${value ?? ''}`;

    super(message);

    this.type = type;
    this.rest = rest;
    this.value = value;
  }
}

RSyntaxError.EXPECTED_END = "Expected end of expression '}' or beginning of conditional expression '?'";
RSyntaxError.INVALID_EXPRESSION = 'Invalid expression. Expected a valid variable or function';
RSyntaxError.INVALID_FUNCTION = 'Invalid function name';
RSyntaxError.NESTING_DEPTH = 'Maximum nesting depth exceeded';
RSyntaxError.UNTERMINATED_EXPRESSION = 'Unterminated expression';
RSyntaxError.UNTERMINATED_FUNCTION = "Unterminated function. Expected an argument or ')'";

export const getterFn = (propertyNames, variables) => {
  return propertyNames.reduce((acc, next) => acc[next] ?? '', variables);
};

export const stripEscapes = (str) => str.replace(/\\(.)/g, '$1');
