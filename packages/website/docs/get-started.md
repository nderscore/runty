---
title: Get Started
slug: /
---

## Installation

### Install locally

#### NPM
```shell
npm install runty
```

#### Yarn
```shell
yarn add runty
```

### Use via CDN

#### Unpkg

```javascript
import { runty } from 'https://unpkg.com/runty/dist/index.mjs';
```

#### Skypack

```javascript
import { runty } from 'https://cdn.skypack.dev/runty';
```

## Quick Examples

Below are some quick examples demonstrating how runty can be used. 

### Simple Interpolations

The most basic usage of runty is to interpolate values from an object into a string:

```javascript
import { runty } from 'runty';

// parse a string template
const template = runty.string('Hello {%name}!');

// execute a template and pass it a dictionary of variables
console.log(template({ name: 'Somebody' }));
// "Hello Somebody!"

// variable accessors can also access nested properties
const anotherTemplate = runty.string('Hello {%person.name}!');

console.log(template({ person: { name: 'Somebody' } }));
// "Hello Somebody!"
```

### Conditional Interpolations

Runty also supports conditional expressions, which look similar to tenary syntax:

```javascript
import { runty } from 'runty';

const template = runty.string('Good {%pm?night:morning}!');

console.log(template({ pm: false }));
// "Good morning!"

console.log(template({ pm: true }));
// "Good night!"
```

The else case is optional and will default to an empty string. Conditional interpolations can also have other interpolations nested inside of their if/else cases.

This example only renders the artist name and extra hyphen if an artist name is defined with a renderable value:

```javascript
import { runty } from 'runty';

const template = runty.string('Now Playing: {%artist?{%artist} - }{%song}');

console.log(template({ artist: 'Weird Al Yankovic', song: 'Albuquerque' }));
// "Now Playing: Weird Al Yankovic - Albuquerque"

console.log(template({ song: 'Albuquerque' }));
// "Now Playing: Albuquerque"
```

### Using Functions

Templates may also call functions, which can be enabled by Functions can be called from within templates, if enabled. One of the configurable options runty accepts is `fns`, an object of functions to make available to templates. 

This example uses [standard library `fns`](fns.md), an optional collection of common logical, formatting, and data manipulation utilities which come with runty.

```javascript
import { runty, fns } from 'runty';

// pass 'fns' option to runty
const template = runty.string(
  '{$gt(%count,0)?There {$eq(%count,1)?is:are} {%count} item{$not($eq(%count,1))?s} in your cart:Your cart is empty}.', 
  { fns }
);

console.log(template({ count: 0 }));
// "Your cart is empty."

console.log(template({ count: 1 }));
// "There is 1 item in your cart."

console.log(template({ count: 2 }));
// "There are 2 items in your cart."
```

### Extending With Custom Functions

This example defines it's own custom functions:

```javascript
import { runty } from 'runty';

// runty functions recieve two arguments:
// - a list of arguments passed by the template
// - a reference to the variable dictionary
const fns: {
  plural: ([num]) => Number(num) !== 1,
  fooOrBar: ([defaultValue], { bar, foo }) => bar ?? foo ?? defaultValue
};

const template = runty.string(
  'There {$plural(%count)?are:is} {%count} item{$plural(%count)?s} in your cart.',
  { fns }
);

console.log(template({ count: 1 }));
// "There is 1 item in your cart."

console.log(template({ count: 3 }));
// "There are 3 items in your cart."


const anotherTemplate = runty.string('This is {$fooOrBar(neither)}.', { fns });

console.log(anotherTemplate({ foo: 'Foo' }));
// "This is Foo."

console.log(anotherTemplate({ bar: 'Bar' }));
// "This is Bar."

console.log(anotherTemplate());
// "This is neither."
```

### Getting Template Result As An Array

In some cases, it may be useful to interpolate non-stringifiable values in a string template. 

For example, you might want to drop a React component into your template:

```jsx
import React from 'react';
import { runty } from 'runty';

// compile an array template:
const template = runty.array('Drop a react component {%component} into your template.');

const Component = () => {
  const values = template({ component: <button key="foo" /> });

  return (
    <div>
      {values}
      // renders: ['Drop a react component ', <button key="foo" />, ' into your template.']
    </div>
  );
};
```

You can even create custom functions that return React components:

```jsx
import React from 'react';
import { runty } from 'runty';
import { Link } from 'react-router-dom';

const fns = {
  link: ([label, path]) => (<Link key={`${label}-${path}`} to={path}>{label}</Link>)
};

const template = runty.array('You can {$link(Click here,/some/path)} to learn more.', { fns });

const Component = () => {
  const values = template();

  return (
    <div>
      {values}
      // renders: [
      //   'You can ',
      //   <Link key="Click here-/some/path" to="/some/path">Click here</Link>,
      //   ' into your template.'
      // ]
    </div>
  );
};
```

## Recommended reading

Now that you've seen a little bit about what runty can do, dive deeper into the details:

* [Learn the runty template syntax](/docs/syntax)
* [Read the API docs](/docs/api)
* [See what's available in the fns standard library](/docs/fns)
* [TypeScript documentation](/docs/typescript)
