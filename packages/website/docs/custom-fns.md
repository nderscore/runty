---
title: Extending With Custom Functions
---

## Intro

Runty is built to be extended with custom functionality by defining functions in the `fns` configuration option. All functions defined in this object are made available for templates to use in expressions.

A [Runty Function](api#runty-function) recieves two main arguments:

* An array of arguments of arbitrary length that were passed to the function in the template. This is the primary method of accepting input.
* A reference to the variables dictionary to allow for argumentless functions that expect specific data from variables. This is also used internally by the getter function that powers `%variable.expressions`.

A runty function should return some value. Depending on where a function is called, the return value may be used as the condition in a conditional expression, as an argument to another function, or it can be dropped into a template in a value expression.

## Example

Here is a simple example of a runty function that determines whether a given numeric value should trigger plural grammar.

```javascript
import { runty, fns } from 'runty';

const plural = ([num], variables) => {
  return Number(num) !== 1;
};

const runt = runty({
  fns: {
    plural
  }
});

const result = runt('{%count} thing{$plural(%count)?s}')({ count: 1 });
```

## Type-casting Arguments

Generally, it is a good idea to type-cast your arguments when using them in a runty function.

In the example above, the argument is cast to a `Number`:

```javascript
Number(num)
```

Doing so affords the flexibility for users or content editors (whoever is writing your templates) to pass in numeric arguments as strings directly in the template (`{%count} thing{%plural(1)?s}`), as well as guards against errors being thrown by unexpected inputs.

## Optional Arguments

Sometimes, you might want to provide default cases for optional arguments in your runty functions. The easiest way to accomplish this is by using destructuring syntax:

```javascript
const myFn = ([arg1, arg2 = '']) => {
  // if the function is called with less than two arguments, arg2 will be an empty string ''
  // ...
};
```

## Graceful Failure

Ideally, runty functions should guard themselves against errors and gracefully resolve to a default or fallback value upon failure.

If you do want template execution to fail on unexpected inputs to a function, any errors you throw will be your responsibility to capture and handle:

```javascript
import { runty, fns } from 'runty';

const plural = ([num], variables) => {
  if (typeof num !== 'number') {
    throw new Error('Invalid value supplied to plural: ' + String(num));
  }

  return num !== 1;
};

const runt = runty({ fns: { plural } });
const template = runt('{$plural(1)?are:is}');

try {
  const result = template();
} catch (e) {
  // Handle your fns errors
}
```

## More Examples

Want to see more example runty functions? Check out the [source code](https://github.com/nderscore/runty/tree/master/packages/runty/src/fns) of our standard library fns on github.
