---
title: Template Syntax
---

## Syntax

* **Templates** are a string containing a sequence of plain strings and expressions.

* **Expressions** are wrapped by a pair of `{}`'s and come in two types:

    1.  **Value Expression**

        Places a value at a specific point in a string template.

        ```
        This is a template {%someVariable} with value expressions {$someFunction()}
        ```

    2.  **Conditional Expression**

        Evaluates a condition, then conditionally places one of two template strings using ternary (`?:`) syntax.

        A conditional expression is "truthy" when it's value is not `false`, `NaN`, `undefined`, `null`, or an empty
        string `''`. Because it is a renderable value in a string, the number `0` is treated as a truthy value.
        
        If the condition is truthy, the expression will resolve to the string after the `?`.
        Otherwise, it will resolve to the string after the `:`. The `:` is optional and if excluded, an empty 
        string `''` will be placed if the condition is falsey.

        ```
        {%someVar?truthy string:falsey string} {$someFn(%someVar,foo)?truthy string only}
        ```

        Additional expressions can be nested inside of the truthy/falsey case.

        ```
        Welcome, {%firstName?{%firstName}{%lastName? {%lastName}}:Guest}!
        ```

*   Value expressions and the condition of a conditional expression contain either a **Variable Reference** or a **Function Call**.

    *   **Variable References** are indicated by a `%` followed by a property name or a chain of `.`-separated
        property names. They retrieve values from the dictionary of variables passed to the template at the time of
        execution.

        ```
        %variableName
        %some.deepValue
        %some.deeper.value
        %someArray.3.name
        ```

        If a value is not found, a variable reference will resolve to an empty string `''`.

    *   **Function Calls** are indicated by a `$` followed by a function name and a pair of parenthesis `()` which
        may optionally contain a list of `,`-separated arguments.

        Valid arguments for function calls are variable references, plain strings, and nested function calls. Functions may accept any number of arguments.

        ```
        $functionName()
        $functionName(%arg1,plain string)
        $fnOne(%var,$fnTwo(%otherVar,foo))
        ```

* White space is always preserved and is interpretted as being part of a plain string.

* Reserved characters (`{}?:)%$`) can be escaped with a `\` prefix. Reserved characters are context-aware. For
  example, a `}` that is not within an expression does not need to be escaped.
