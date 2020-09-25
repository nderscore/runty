export const TOKENS = {
  ELSE_START: /^:/,
  EXPRESSION_END: /^\}/,
  IF_START: /^\?/,
  EXPRESSION_START: /^\{/,
  FUNCTION_START: /^\$(\w+)\(/,
  FUNCTION_SEPARATOR: /^,/,
  FUNCTION_END: /^\)/,
  STRING_IF: /^(?:\\.|[^{}:])*/,
  STRING_ELSE: /^(?:\\.|[^{}])*/,
  STRING_FUNCTION: /^(?:\\.|[^,)])*/,
  STRING_OUTER: /^(?:\\.|[^{])*/,
  VARIABLE: /^%(\w+(?:\.\w+)*)/,
};

export const MODES = {
  EXPRESSION: 'EXPRESSION',
  FUNCTION: 'FUNCTION',
  IF: 'IF',
  ELSE: 'ELSE',
  TOP: 'TOP',
};

export const CONDITION = { RUNTY_CONDITION: null };

export const getterFn = (propertyNames, variables) => {
  return propertyNames.reduce((acc, next) => acc[next] ?? '', variables);
};

export const stripEscapes = (str) => str.replace(/\\(.)/g, (_, capture) => capture);
