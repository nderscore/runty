---
title: Migrating from v0.1.x
---

## Background

Prior to the v0.2.0 rewrite, runty used a different API for defining templates that used currying to set options. There also was only one runty function, `runty()`, with no separation between string and array templates, and the ability to trigger array syntax at any level of the currying. This was too flexible to easily fit into the migration to TypeScript without negatively impacting the return types of all templates (they would always be of type `string | (string | unknown)[]`) so as of v0.2.0 the API has changed to split string and array output templates and remove the options currying syntax.

```javascript
// options currying syntax:
runty(options)(template)(variables);

// trigger array output in options:
runty({ asArray: true })(template)(variables);

// trigger array output at template definition:
runty()(template, true)(variables);

// trigger array output at template execution:
runty()(template)(variables, true);
```

## Migration

Migration to the new API should be fairly straight-forward. Just remove one layer of function calls, swap `runty` for `runty.string`, and move your options to the second argument where you define your template.

```javascript
// before:
const runt = runty(options);
const template = runt('...');

// after:
const template = runty.string('...', options);
```

If you were re-using an instance of runty with options, you can re-create the same behavior on your own:

```javascript
// before:
export const runt = runty(options);

// elsewhere in the app:
const template = runt('...');

// after:
export const runt = (template) => runty(template, options);
```

If you were using array output, use `runty.array()` or the `array()` export instead.

```javascript
// before:
export const runt = runty({ asArray: true });
// or:
runt('...', true);
// or:
template('...', true);

// after:
const template = runty.array('...');
```
