# runty

Extensible conditional string templates.

------

## Features

* Zero dependencies
* Variable interpolation 
* Conditional branching
* Nested expressions
* Extensible with custom functions, or a standard library of functions
* Parse templates once, execute them multiple times with different values
* Use non-string tokens (such as React components) with array format option

This library is still under active development and should be considered beta/experimental.

------

## Documentation

* [Installation](#installation)
* [Quick Examples](#quick-examples)
* [Template Syntax](docs/syntax.md)
* [API Reference](docs/api.md)
* [Standard Library (fns)](docs/fns.md)
* [Extending With Custom Functions](docs/custom-fns.md)

------

## Installation

```shell
$ npm install runty

or

$ yarn add runty
```

------

## Quick Examples

### Conditional Interpolations

This example uses simple conditional variable interpolations.

```javascript
import { runty } from 'runty';

// create a parser
const runt = runty();

// compile a template
const template = runt('Now Playing: {%artist?{%artist} - }{%song}');

// execute a template and pass it a dictionary of variables
console.log(template({ artist: 'Weird Al Yankovic', song: 'Albuquerque' }));
// "Now Playing: Weird Al Yankovic - Albuquerque"

console.log(template({ song: 'Albuquerque' }));
// "Now Playing: Albuquerque"

// using an array as a variable dictionary
const anotherTemplate = runt('{%1?{%1}:Unknown Artist} - {%0}');

console.log(anotherTemplate(['Albuquerque', 'Weird Al Yankovic']));
// "Weird Al Yankovic - Albuquerque"

console.log(anotherTemplate(['Albuquerque']));
// "Unknown Artist - Albuquerque"
```

### Using Functions

This example uses [standard library `fns`](docs/fns.md).

```javascript
import { runty, fns } from 'runty';

const runt = runty({ fns });

const template = runt('{$gt(%count,0)?There {$eq(%count,1)?is:are} {%count} item{$not($eq(%count,1))?s} in your cart:Your cart is empty}.');

console.log(template({ count: 0 }));
// "Your cart is empty."

console.log(template({ count: 1 }));
// "There is 1 item in your cart."

console.log(template({ count: 2 }));
// "There are 2 items in your cart."
```

### Extending With Custom Functions

This example doesn't use the standard libary and defines a custom set of functions.

```javascript
import { runty } from 'runty';

const runt = runty({
  fns: {
    plural: ([number]) => number !== 1,
    fooOrBar: ([defaultValue], { bar, foo }) => bar ?? foo ?? defaultValue
  }
});

const template = runt('There {$plural(%count)?are:is} {%count} item{$plural(%count)?s} in your cart.');

console.log(template({ count: 1 }));
// "There is 1 item in your cart."

console.log(template({ count: 3 }));
// "There are 3 items in your cart."


const anotherTemplate = runt('This is {$fooOrBar(neither)}.');

console.log(anotherTemplate({ foo: 'Foo' }));
// This is Foo.

console.log(anotherTemplate({ bar: 'Bar' }));
// This is Bar.

console.log(anotherTemplate());
// This is neither.
```

### Getting Template Result As An Array

In some cases, such as React, it may be useful to interpolate non-stringifiable values in a string template, so you can retrieve the result as an array. 

```jsx
import React from 'react';
import { runty } from 'runty';

const runt = runty({ asArray: true });

const template = runt('Drop a react component {%component} into your templates.');

const Component = () => {
  const values = template({ component: <button key="foo" /> });

  return (
    <div>
      {values} // renders: ['Drop a react component ', <button key="foo" />, ' into your template']
    </div>
  );
};

// Or get an array result at time of template compilation by passing true as the second argument:
const template = runt('Drop a react component {%component} into your template.', true);

template({ component: <button key="foo" /> });
// ['Drop a react component ', <button key="foo" />, ' into your template']
```
