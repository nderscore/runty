---
title: API Reference
---

## Template Parsers

Runty has two functions for parsing templates and two ways to import/use each of them. 

* `runty.string()`
* `runty.array()`
* `string()`
* `array()`

```javascript
import { runty, string, array } from 'runty';

// define a string template:
const template = runty.string('template', {/* options */});

// or use the string only export:
const template = string('template', {/* options */});

// define a template with array output:
const template = runty.array('template', {/* options */});

// or use the array only export:
const template = array('template', {/* options */});
```

### Arguments

* `string: template`

    The first and only required argument for both template parsing functions is the template string. It should follow the runty [template string](syntax.md).

* `options?: RuntyOptions`

    Runty's template parsers accept an optional second argument of options with the following schema:

    *   `options.fns?: { [string: name]: RuntyFunction }`
        * Default: `{}` *(empty)*
        * Object dictionary which defines functions which will be available to the template
        * Functions should follow the specification defined by [Runty Functions](#runty-function)

        * See [Standard Library](fns.md) and [Custom Functions](custom-fns.md) documentation for more info.
    *   `options.maxDepth?: number`
        * Default: `8`
        * Sets the maximum depth of nested logic (expressions/function calls) that will be parsed by this instance. Runty will throw an error if this depth is exceeded.

### Returns

*   [`Template Function`](#template-function).
    * A compiled template function.

If a template is invalid or contains syntax errors, this function will throw a [`RSyntaxError`](#rsyntaxerror)

------

## Template Function

Generates a string (or array of strings and tokens) from a dictionary of values.

```javascript
const result = template(variables);
```

### Arguments

*   `variables: object`
    * A dictionary of values to pass as variables to the template.

### Returns

*   `string`
    * If using `runty.string()` or `string()`

OR

*   `(string | unknown)[]`
    * If using `runty.array()` or `array()`
    * The values in the array will depend on the values in your variable dictionary and the return type of your functions.

------

## RSyntaxError

`RSyntaxError` is the Error class thrown when the template parser encounters invalid syntax.

### Error Types

The following types of errors can be raised, which are exported as an object/enum `RSyntaxErrorType`

* `RSyntaxErrorType.EXPECTED_END`
* `RSyntaxErrorType.INVALID_EXPRESSION`
* `RSyntaxErrorType.INVALID_FUNCTION`
* `RSyntaxErrorType.NESTING_DEPTH`
* `RSyntaxErrorType.UNTERMINATED_EXPRESSION`
* `RSyntaxErrorType.UNTERMINATED_FUNCTION`

### Instance Properties

*   `message: string`

    Long-form syntax error message

*   `type: RSyntaxErrorType.(EXPECTED_END|INVALID_EXPRESSION|INVALID_FUNCTION|NESTING_DEPTH|UNTERMINATED_EXPRESSION|UNTERMINATED_FUNCTION)`

    The type of syntax error that was encountered.

*   `rest: string`

    The remaining unparsed template string.

*   `value: string`

    Some errors contain another value to provide additional context, such as the function name of an `INVALID_FUNCTION` error

-------

## Runty Function

A function passed as a value of the `fns` option.

```javascript
someFn(args, variables);
```

### Arguments

*   `args: unkonwn[]`
    * An array of arguments passed to the function.
    * May be plain strings, token values, or results from other function calls.

*   `variables: object`
    * The dictionary of values passed to the template being executed.

### Returns

*   `unknown`
    * The resulting value.
    * This may be used as a condition, as an argument to another function, or inserted into a template as a value.
