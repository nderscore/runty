# Extending With Custom Functions

TODO: Write a guide.

See [API Docs](api.md#runty-function) for custom function specification.

```javascript
import { runty, fns } from 'runty';

const customFn = ([arg1, arg2], variables) => { /* do something */ };

// extend the standard library fns
runty({
  fns: {
    ...fns,
    customFn
  }
});

// or only use specific functions
runty({
  fns: {
    customFn
  }
});
```
