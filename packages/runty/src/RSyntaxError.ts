export enum RSyntaxErrorType {
  EXPECTED_END,
  INVALID_EXPRESSION,
  INVALID_FUNCTION,
  NESTING_DEPTH,
  UNTERMINATED_EXPRESSION,
  UNTERMINATED_FUNCTION,
}

export const ERROR_MESSAGES = {
  [RSyntaxErrorType.EXPECTED_END]: "Expected end of expression '}' or beginning of conditional expression '?'",
  [RSyntaxErrorType.INVALID_EXPRESSION]: 'Invalid expression. Expected a valid variable or function',
  [RSyntaxErrorType.INVALID_FUNCTION]: 'Invalid function name',
  [RSyntaxErrorType.NESTING_DEPTH]: 'Maximum nesting depth exceeded',
  [RSyntaxErrorType.UNTERMINATED_EXPRESSION]: 'Unterminated expression',
  [RSyntaxErrorType.UNTERMINATED_FUNCTION]: "Unterminated function. Expected an argument or ')'",
};

export class RSyntaxError extends Error {
  public type: RSyntaxErrorType;
  public rest?: string;
  public value?: string;

  constructor(type: RSyntaxErrorType, rest?: string, value?: string) {
    const message = `${ERROR_MESSAGES[type]}${value !== undefined ? ` (${value})` : ''}${
      rest ? ` near "${rest.slice(0, 10)}"` : ''
    }`;

    super(message);

    this.type = type;
    this.rest = rest;
    this.value = value;
  }
}
