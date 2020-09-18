# runty

Extensible conditional string templates.

## Features

* Basic string tokens
* Conditional branching
* Nesting
* Extensible with custom functions


## Grammar

* Runty templates are a string containing a sequence of plain strings and runty expressions.
* White space is always preserved. Reserved characters can be escaped with a `\` prefix.
* Runty expressions are delimited by `{}`'s and come in two flavors:
    * Value expressions: `{%someVariable}` / `{$someFunction()}`
    * Conditional expressions: `{%someVariable?if case:else case}` / `{$someFunction()?if case}` (else case is optional)
* An expression should contain either a variable reference (`%variableName`) or a function call (`$someFunction(%someVar,foo)`).
* Conditional expressions will resolve to `true` for any truthy value or for the number `0`.
* Function calls may accept any number of arguments, which must be either `%variables`, `plain strings`, or nested `$functionCalls()`
* The `if case` and `else case` of a conditional expression are treated as templates and may contain nested expressions.


## Basic Usage


```javascript
import { runty } from 'runty';

// create a client
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


## Extending With Functions

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


### Runty Standard Library Functions

Documentation and additional functions to come soon...

```javascript
import { runty, fns } from 'runty';

const runt = runty({ fns });

const template = runt('{$gt(%count,0)?There {$eq(%count,1)?is:are} {%count} item{$not($eq(%count,1))?s} in your cart:Your cart is empty}.');

console.log(template({ count: 0 }));
// "Your cart is empty."

console.log(template({ count: 1 }));
// "There is 1 item in your cart."

console.log(template({ count: 3 }));
// "There are 3 items in your cart."
```

### Getting Template Result As An Array

```jsx
import React from 'react';
import { runty } from 'runty';

const runt = runty({ asArray: true });

const template = runt('Drop a react component {%component} into your templates.');

const App = () => {
  const values = template({ component: <button key="foo" /> });

  return (
    <div>
      {values} // ['Drop a react component ', <button key="foo" />, ' into your template']
    </div>
  );
};
```

```jsx
// Alternatively, get an array result at time of template execution by passing true as the second argument:
const runt = runty();
const template = runt('Drop a react component {%component} into your template.');
template({ component: <button key="foo" /> }, true);
// ['Drop a react component ', <button key="foo" />, ' into your template']
```
