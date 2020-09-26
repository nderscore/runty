# Runty Template Syntax

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
        If the condition is either truthy or the number `0`, the expression will resolve to the string after the `?`.
        Otherwise, it will resolve to the string after the `:`. The `:` is optional and if excluded, an empty 
        string `''` will be placed if the condition is falsey.

        ```
        {%someVariable?truthy string:falsey string} {$someFunction(%anotherVariable,foo)?truthy string only}
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
        ```

        If a value is not found, a variable reference will resolve to an empty string `''`.

    *   **Function Calls** are indicated by a `$` followed by a function name and suffixed with a list of `,`-separated arguments wrapped in `()`'s.

        ```
        $functionName()
        ```

        Valid arguments for function calls are variable references, plain strings, and nested function calls. Functions may accept any number of arguments.

        ```
        $functionName(%arg1,plain string)
        $fnOne(%var,$fnTwo(%otherVar,foo))
        ```

* White space is always preserved and is interpretted as being part of a plain string.

* Reserved characters (`{}?:)%$`) can be escaped with a `\` prefix. Reserved characters are context-aware. For
  example, a `}` that is not within an expression does not need to be escaped.
