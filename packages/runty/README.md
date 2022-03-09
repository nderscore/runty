# runty

Extensible conditional string micro templates.

------

## Features

* Simple, but powerful template syntax
* Conditional string rendering with support for nested expressions
* Variable (interpolation / subsitution / expansion) with support for property accessor chaining 
* Parse/compile your templates once, execute them multiple times with different values
* Support for array output, allowing substitution of non-string values (such as React components) 
* Extensible with custom functions (or use our [Standard Library (fns)](https://runty.js.org/docs/fns))
* Bundle-bloat friendly. Small, tree-shakeable library with zero dependencies

------

## Documentation

Documentation and a demo are available at https://runty.js.org

------

## Installation

```shell
$ npm install runty

or

$ yarn add runty
```

Or import the library directly in your browser or deno:

```javascript
import { runty } from 'https://cdn.skypack.dev/runty';
```

------

## Quick Examples

### Conditional Interpolations

This example uses simple conditional variable interpolations.

```javascript
import { runty } from 'runty';

// compile a template
const template = runty.string('Now Playing: {%artist?{%artist} - }{%song}');

// execute a template and pass it a dictionary of variables
console.log(template({ artist: 'Weird Al Yankovic', song: 'Albuquerque' }));
// "Now Playing: Weird Al Yankovic - Albuquerque"

console.log(template({ song: 'Albuquerque' }));
// "Now Playing: Albuquerque"
```

### Using Functions

This example uses [standard library `fns`](docs/fns.md).

```javascript
import { runty, fns } from 'runty';

const template = runty.string('{$gt(%count,0)?There {$eq(%count,1)?is:are} {%count} item{$not($eq(%count,1))?s} in your cart:Your cart is empty}.', { fns });

console.log(template({ count: 0 }));
// "Your cart is empty."

console.log(template({ count: 1 }));
// "There is 1 item in your cart."

console.log(template({ count: 2 }));
// "There are 2 items in your cart."
```

### Extending With Custom Functions

This example defines it's own custom functions to make available to templates.

```javascript
import { string } from 'runty';

const fns = {
  plural: ([num]) => Number(num) !== 1,
  fooOrBar: ([defaultValue], { bar, foo }) => bar ?? foo ?? defaultValue
};

const runt = string('There {$plural(%count)?are:is} {%count} item{$plural(%count)?s} in your cart.', { fns });

console.log(template({ count: 1 }));
// "There is 1 item in your cart."

console.log(template({ count: 3 }));
// "There are 3 items in your cart."


const anotherTemplate = string('This is {$fooOrBar(neither)}.', { fns });

console.log(anotherTemplate({ foo: 'Foo' }));
// This is Foo.

console.log(anotherTemplate({ bar: 'Bar' }));
// This is Bar.

console.log(anotherTemplate());
// This is neither.
```

### Getting Template Result As An Array

In some cases, it may be useful to interpolate non-stringifiable values in a string template. For example, it
may be useful to insert a React component into a string template.

```jsx
import React from 'react';
import { runty, array } from 'runty';

// use runty.array():
const template = runty.array('Drop a react component {%component} into your template.');
// or use the array export:
const template = array('Drop a react component {%component} into your template.');

const Component = () => {
  const values = template({ component: <button key="foo" /> });

  return (
    <div>
      {values} // renders: ['Drop a react component ', <button key="foo" />, ' into your template.']
    </div>
  );
};
```