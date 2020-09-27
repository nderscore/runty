import { RSyntaxError, runty } from 'runty';

describe('Syntax errors', () => {
  it('should throw EXPECTED_END', () => {
    const runt = runty({ fns: { foo: () => 0 } });

    expect.assertions(2);

    try {
      runt('This is invalid {%syntax:foo}');
    } catch (e) {
      expect(e.type).toBe(RSyntaxError.EXPECTED_END);
    }

    try {
      runt('This is invalid {$foo()');
    } catch (e) {
      expect(e.type).toBe(RSyntaxError.EXPECTED_END);
    }
  });

  it('should throw INVALID_EXPRESSION', () => {
    const runt = runty();

    expect.assertions(2);

    try {
      runt('This is invalid {}');
    } catch (e) {
      expect(e.type).toBe(RSyntaxError.INVALID_EXPRESSION);
    }

    try {
      runt('This is invalid {foo}');
    } catch (e) {
      expect(e.type).toBe(RSyntaxError.INVALID_EXPRESSION);
    }
  });

  it('should throw INVALID_FUNCTION', () => {
    const runt = runty({ fns: { foo: () => 0 } });

    expect.assertions(2);

    try {
      runt('This is invalid {$doesntExist()}');
    } catch (e) {
      expect(e.type).toBe(RSyntaxError.INVALID_FUNCTION);
    }

    try {
      runt('This is invalid {$foo($doesntExist())}');
    } catch (e) {
      expect(e.type).toBe(RSyntaxError.INVALID_FUNCTION);
    }
  });

  it('should throw NESTING_DEPTH', () => {
    const runt = runty({ maxDepth: 3 });

    expect.assertions(1);

    try {
      runt('This is invalid {%a?{%b?{%c?{%d}}}}');
    } catch (e) {
      expect(e.type).toBe(RSyntaxError.NESTING_DEPTH);
    }
  });

  it('should throw UNTERMINATED_EXPRESSION', () => {
    const runt = runty();

    expect.assertions(1);

    try {
      runt('This is invalid {%a?{%b?a}');
    } catch (e) {
      expect(e.type).toBe(RSyntaxError.UNTERMINATED_EXPRESSION);
    }
  });

  it('should throw UNTERMINATED_FUNCTION', () => {
    const runt = runty({ fns: { foo: () => 0 } });

    expect.assertions(1);

    try {
      runt('This is invalid {$foo(}');
    } catch (e) {
      expect(e.type).toBe(RSyntaxError.UNTERMINATED_FUNCTION);
    }
  });
});
