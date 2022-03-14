---
title: TypeScript
---

## Intro

Since v0.2.0, runty has been rewritten in TypeScript and comes packaged with type definitions. In the majority of use cases, runty templates should work out of the box without any customization, unless you specifically want stronger typing or if you're defining your own custom functions.

## Typing Templates

Runty's template functions (`runty.string()` / `runty.array()`) accept two generic slots, `V` (the variable dictionary) and `R` (return types of `fns`). 

The first slot allows you to constrain the type of the variable dictionary passed to your template.

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

All functions passed to `fns` are expected to match the shape of `RuntyFunction<V, R>` in the type definitions.

To write a custom runty function, import types `VariableDictionary` (the default type for variable dictionaries) and `ReturnValues` (the default type for what functions can return) and use the following typing:

```typescript
import type { ReturnValues, VariableDictionary } from 'runty';

const myCustomFn = <V extends VariableDictionary, R extends ReturnValues<V>>(
    args: R[],
    variables: V
): R => {
    // ...
};
```

See the [source code](https://github.com/nderscore/runty/tree/master/packages/runty/src/fns) of our standard library fns on github for more examples.

If your custom function needs to return something other than a scalar value, such as dropping a react element into an array output template, you may need to customize the return values generic slot:

```tsx
import type { Element } from 'react';
import type { ReturnValues, VariableDictionary } from 'runty';

const myCustomFn = <V extends VariableDictionary, R extends ReturnValues<V> & Element>(
    args: R[],
    variables: V
): Element => (<b>JSX!</b>);

// VariableDictionary is the default dictionary type
const template = <VariableDictionary, ReturnValues<VariableDictionary> & Element>(
    'This is my template {$myCustomFn()}',
    { fns: { myCustomFn } }
);
```
