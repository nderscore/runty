# Runty Template Syntax

## Grammar

**Runty Templates** are a string containing a sequence of plain strings and runty expressions.

**Runty Expressions** are delimited by curly braces `{}`'s and come in two types:

1.  **Value Expressions**

    Places a value at a specific point in a string template.

    ```
    This is a template {%someVariable} with value expressions {$someFunction()}
    ```

2.  **Conditional Expressions**

    Evaluates a condition, then conditionally renders one of two template strings using ternary (`?:`) syntax.

    If the condition is either truthy or Number `0`, the truthy case string will be placed.

    The else case is optional and if excluded, an empty string `''` will be placed.

    ```
    {%someVariable?truthy string:falsey case} {$someFunction(%anotherVariable,foo)?truthy case only}
    ```

    You may nest expressions within the truthy or falsey case.

    ```
    {%firstName?Hello, {%firstName}{%lastName? {%lastName}}:Welcome}
    ```

*   All expressions should contain either a **Variable Reference** or a **Function Call**.

*   **Variable References** are delimited by a `%` prefix. They retrieve values from the dictionary of variables passed to the template at the time of execution.

    ```
    %variableName
    ```

*   **Function Calls** are delimited by a `$` prefix and are suffixed by `()`'s with a list of `,`-separated arguments inside.

    ```
    $functionName()
    ```

    They may accept any number of arguments, which must be either Variables Reference, plain strings, or nested Function Calls.

    ```
    $functionName(%arg1,plain string)
    $fnOne(%var,$fnTwo(%otherVar,foo))
    ```

* White space is always preserved and is interpretted as being part of a plain string.

* Reserved characters (`{}?:`) can be prefixed with a `\` to escape them.
