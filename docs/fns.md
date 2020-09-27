# Runty Standard Library (fns)

* [Intro](#intro)
* [Classes](#classes)
    * [logicFns](#logicfns)
        * [and](#and)
        * [eq](#eq)
        * [gt](#gt)
        * [gte](#gte)
        * [is](#is)
        * [lt](#lt)
        * [lte](#lte)
        * [not](#not)
        * [or](#or)
    * [numberFns](#numberfns)
        * [add](#add)
        * [ceil](#ceil)
        * [div](#div)
        * [flr](#flr)
        * [fix](#fix)
        * [max](#max)
        * [min](#min)
        * [mul](#mul)
        * [rnd](#rnd)
        * [sub](#sub)
    * [stringFns](#stringfns)
        * [cat](#cat)
        * [idx](#idx)
        * [len](#len)
        * [low](#low)
        * [pl](#pl)
        * [pr](#pr)
        * [rpt](#rpt)
        * [rpl](#rpl)
        * [sbs](#sbs)
        * [slc](#slc)
        * [trim](#trim)
        * [up](#up)
    * [utilFns](#utilfns)
        * [$ (variable getter)](#variable-getter)
        * [get](#get)
        * [join](#join)
        * [idx](#idx-1)
        * [len](#len-1)
        * [slc](#slc-1)

------

# Intro

The standard library `fns` is a set of small, template-friendly utility functions covering a broad range of string template needs.

```javascript
// import the entire standard library
import { runty, fns } from 'runty';

// pass as 'fns' option in the runty constructor
const runt = runty({ fns });
```

Because the standard library covers a broad range of use cases, you might not want to import the entire library. Because of this, the standard library is also made available as classes of functions, and as independent functions which can be imported individually.

```javascript
// import a class of functions
import { runty, stringFns } from 'runty';

const runt = runty({ fns: stringFns });
```

```javascript
// or only import the function(s) you need
import { runty, eq, not } from 'runty';

const runt = runty({
  fns: { 
    eq,
    not
  }
});
```

------

# Classes

## logicFns

```javascript
import { logicFns } from 'runty';

const runt = runty({ fns: logicFns });
```

### and

```
$and(%a,%b,...)
```

Boolean AND operation. Accepts any number of arguments. Evaluates to `true` when all arguments are truthy, with number `0` also being truthy.

### eq

```
$eq(%a,%b)
```

Loose equality check of two values. Compares values as numbers if at least one argument is a number, or a string if at least one argument is a string, otherwise uses `===` equality.

### gt

```
$gt(%a,%b)
```

Greater than comparison. Compares values as numbers if at least one argument is a number, or a string if at least one argument is a string, otherwise uses `>` comparison without type-casting.

### gte

```
$gte(%a,%b)
```

Greater than or equal to comparison. Compares values as numbers if at least one argument is a number, or a string if at least one argument is a string, otherwise uses `>=` comparison without type-casting.

### is

```
$is(%a,%b)
```

Strict equality check of two values using `Object.is`

### lt

```
$lt(%a,%b)
```

Less than comparison. Compares values as numbers if at least one argument is a number, or a string if at least one argument is a string, otherwise uses `<` comparison without type-casting.

### lte

```
$lte(%a,%b)
```

Less than or equal to comparison. Compares values as numbers if at least one argument is a number, or a string if at least one argument is a string, otherwise uses `<=` comparison without type-casting.

### not

```
$not(%val)
```

Boolean NOT operation. Negates a value, resolving to a boolean while treating number `0` as a truthy value.

### or

```
$or(%a,%b,%c,...)
```

Boolean OR operation. Accepts any number of arguments. Evaluates to `true` when at least one argument is truthy, with number `0` also being truthy.

## numberFns

```javascript
import { numberFns } from 'runty';

const runt = runty({ fns: numberFns });
```

### add

```
$add(%a,%b,...)
```

Addition. Evaluates two or more arguments as numbers and adds them.

### ceil

```
$ceil(%val)
```

Ceil operation. Rounds a decimal value up to the next largest integer.

### div

```
$div(%a,%b,...)
```

Division. Evaluates two or more arguments as numbers and divides them.

### flr

```
$flr(%val)
```

Floor operation. Rounds a decimal value down to the largest integer less than or equal to it.

### fix

```
$fix(%val,%digits)
```

Fixed digit formatting. Converts a number (`%val`) into a string with a fixed number of specific digits (`%digits`).

### max

```
$max(%a,%b,...)
```

Maximum. Evaluates two or more arguments as numbers and returns the largest value.

### min


```
$min(%a,%b,...)
```

Minimum. Evaluates two or more arguments as numbers and returns the smallest value.

### mul

```
$mul(%a,%b,...)
```

Multiplication. Evaluates two or more arguments as numbers and multiplies them.

### rnd

```
$rnd(%val)
```

Round. Rounds a decimal value to the nearest integer.

### sub

```
$sub(%a,%b,...)
```

Subtraction. Evaluates two or more arguments as numbers and subtracts them.

## stringFns

```javascript
import { stringFns } from 'runty';

const runt = runty({ fns: stringFns });
```

### cat

```
$cat(%a,%b,...)
```

Concatenate. Evaluates two or more arguments as strings and joins them.

### idx

```
$idx(%str,%search)
```

Index Of. Finds the index of a search string (`%search`) in some string value (%str)

This function can also be used with Arrays and is shared with [`utilFns`](#utilfns)

### len

```
$len(%str)
```

Length. Gets the length of a string.

This function can also be used with Arrays and is shared with [`utilFns`](#utilfns)

### low

```
$low(%str)
```

To Lower Case. Converts a string to all lowercase letters.

### pl

```
$pl(%str,%len[,%padString])
```

Pad left. Pads the left-hand side of a string until it is at least a minimum length (`%len`) with spaces (` `) or with `%padString` (optional)

### pr

```
$pr(%str,%len[,%padString])
```

Pad right. Pads the right-hand side of a string until it is at least a minimum length (`%len`) with spaces (` `) or with `%padString` (optional)

### rpt

```
$rpt(%str,%count)
```

Repeat. Repeats a string (`%str`) a number of times (`%count`)

### rpl

```
$rpl(%str,%search,%replacement)
```

Replace. Replaces all instances of a search string (`%search`) in a string (`%str`) with a replacement string (`%replacement`)

### sbs

```
$sbs(%str,%start,%length)
```

Substring. Extracts a portion of a string (`%str`) of a specific length (`%length`) from a starting index (`%start`)

### slc

```
$slc(%str,%start,%end)
```

Slice. Extracts a portion of a string (`%str`) from a starting index (`%start`) to an ending index (`%end`)

This function can also be used with Arrays and is shared with [`utilFns`](#utilfns)

### trim

```
$trim(%str)
```

Trim. Removes leading or trailing whitespace from a string.

### up

```
$up(%str)
```

To Upper Case. Converts a string to all uppercase letters.

## utilFns

```javascript
import { utilFns } from 'runty';

const runt = runty({ fns: utilFns });
```

### $ (variable getter)

```
$$(%a,...)
```

Dynamicly access variables values. Accepts any number of arguments, which are treated as chained property accessors. Behaves just like a variable accessor (`%foo` / `%foo.bar.etc`)

### get

```
$get(%obj,%prop,...)
```

Property accessor for objects. Retrieves a property (`%prop`) from an object (`%obj`). Accepts any number of additional arguments, which are treated as chained property accessors.

### join

```
$join(%arr,%str)
```

Array join. Merges the values in an array (`%arr`) as a string, with an optional string delimiter (`%str`).

### idx

```
$idx(%arr,%search)
```

Index Of. Finds the index of a value (`%search`) in some array (`%arr`)

This function can also be used with strings and is shared with [`stringFns`](#stringfns)

### len

```
$len(%arr)
```

Length. Gets the length of an array.

This function can also be used with strings and is shared with [`stringFns`](#stringfns)

### slc

```
$slc(%arr,%start,%end)
```

Slice. Extracts a portion of an array (`%arr`) from a starting index (`%start`) to an ending index (`%end`)

This function can also be used with strings and is shared with [`stringFns`](#stringfns)
