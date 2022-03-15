---
title: TypeScript
---

## Intro

Since v0.2.0, runty has been rewritten in TypeScript and comes packaged with type definitions. In the majority of use cases, runty templates should work out of the box without any customization, unless you specifically want stronger typing or if you're defining your own custom functions.

## Typing Templates

Runty's template functions (`runty.string()` / `runty.array()`) accept a generic slot, `V`, which allows you to constrain the type of the variable dictionary passed to your template.

```typescript
import { runty } from 'runty';

const template = runty<{ foo: string; }>('The thing is {%foo}');

template({ foo: 'something' });
// "The thing is something"

template({ foo: 'something', bar: 'something else' });
// type error (unknown property 'bar')

template();
// type error (missing 'foo')
```

## Typing Custom Functions

All functions passed to `fns` are expected to match the shape of `RuntyFunction<V>` in the type definitions.

Most custom functions don't need to do anything special for their types. They just need to accept `unknown[]` in the first argument, representing the arguments passed the function. 

If you're using array output templates, the return values of your functions will determine the return type of your template.

```typescript
const myCustomFn = (args: unknown[]) => {
    // ...
};
```

If your custom function uses the second argument to access the variable dictionary, you'll need to import the `VariableDictionary` type (the default type for variable dictionaries) and accept a generic slot that extends it (or use your own specific data types) to use for the variables argument.

```typescript
import type { VariableDictionary } from 'runty';

const myCustomFn = <V extends VariableDictionary>(
    args: unknown[],
    variables: V
) => {
    // ...
};
```

See the [source code](https://github.com/nderscore/runty/tree/master/packages/runty/src/fns) of our standard library fns on github for more examples.

