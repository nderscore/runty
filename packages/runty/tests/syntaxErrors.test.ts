import { RSyntaxErrorType, runty } from 'runty';

describe('Syntax errors', () => {
  const fns = { foo: () => 0 };

  it('should throw EXPECTED_END', () => {
    expect.assertions(2);

    try {
      runty.string('This is invalid {%syntax:foo}', { fns });
    } catch (e) {
      expect(e.type).toBe(RSyntaxErrorType.EXPECTED_END);
    }

    try {
      runty.string('This is invalid {$foo()', { fns });
    } catch (e) {
      expect(e.type).toBe(RSyntaxErrorType.EXPECTED_END);
    }
  });

  it('should throw INVALID_EXPRESSION', () => {
    expect.assertions(2);

    try {
      runty.string('This is invalid {}');
    } catch (e) {
      expect(e.type).toBe(RSyntaxErrorType.INVALID_EXPRESSION);
    }

    try {
      runty.string('This is invalid {foo}');
    } catch (e) {
      expect(e.type).toBe(RSyntaxErrorType.INVALID_EXPRESSION);
    }
  });

  it('should throw INVALID_FUNCTION', () => {
    expect.assertions(3);

    try {
      runty.string('This is invalid {$doesntExist()}', { fns });
    } catch (e) {
      expect(e.type).toBe(RSyntaxErrorType.INVALID_FUNCTION);
    }

    try {
      runty.string('This is invalid {$foo($doesntExist())}', { fns });
    } catch (e) {
      expect(e.type).toBe(RSyntaxErrorType.INVALID_FUNCTION);
      expect(e.value).toBe('doesntExist');
    }
  });

  it('should throw NESTING_DEPTH', () => {
    expect.assertions(1);

    try {
      runty.string('This is invalid {%a?{%b?{%c?{%d}}}}', { maxDepth: 3 });
    } catch (e) {
      expect(e.type).toBe(RSyntaxErrorType.NESTING_DEPTH);
    }
  });

  it('should throw UNTERMINATED_EXPRESSION', () => {
    expect.assertions(1);

    try {
      runty.string('This is invalid {%a?{%b?a}');
    } catch (e) {
      expect(e.type).toBe(RSyntaxErrorType.UNTERMINATED_EXPRESSION);
    }
  });

  it('should throw UNTERMINATED_FUNCTION', () => {
    expect.assertions(1);

    try {
      runty.string('This is invalid {$foo(}', { fns });
    } catch (e) {
      expect(e.type).toBe(RSyntaxErrorType.UNTERMINATED_FUNCTION);
    }
  });
});
