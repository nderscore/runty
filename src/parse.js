import { CONDITION, MODES, RSyntaxError, RSyntaxErrorType, TOKENS, getterFn, stripEscapes } from './constants';

export const parse = (template, options) => {
  const { fns, maxDepth } = options;

  const tree = [];
  const stack = [];

  let branch = tree;
  let restTemplate = template;
  let mode = MODES.TOP;

  const getToken = (regex) => {
    const result = restTemplate.match(regex);

    if (!result || result[0].length === 0) return [];

    restTemplate = restTemplate.slice(result[0].length);

    return result;
  };

  const getParentBranch = () => stack[stack.length - 1];

  const splitBranch = (nextMode) => {
    const childBranch = [];
    branch.push(childBranch);

    stack.push([mode, branch]);

    branch = childBranch;
    mode = nextMode;
  };

  const wrapBranchWithCondition = () => {
    const newBranch = [CONDITION, branch];

    const [, parentBranch] = getParentBranch();
    parentBranch[parentBranch.length - 1] = newBranch;

    branch = newBranch;

    splitBranch(MODES.IF);
  };

  const terminateBranch = () => {
    [mode, branch] = stack.pop();
  };

  while (restTemplate.length > 0) {
    if (stack.length > maxDepth) {
      throw new RSyntaxError(RSyntaxErrorType.NESTING_DEPTH, restTemplate);
    }

    switch (mode) {
      case MODES.TOP:
      case MODES.IF:
      case MODES.ELSE: {
        const isTop = mode === MODES.TOP;
        const isIf = mode === MODES.IF;

        const [startExpressionToken] = getToken(TOKENS.EXPRESSION_START);
        if (startExpressionToken) {
          splitBranch(MODES.EXPRESSION);
          break;
        }

        if (isIf) {
          const [elseConditionToken] = getToken(TOKENS.ELSE_START);
          if (elseConditionToken) {
            terminateBranch();
            splitBranch(MODES.ELSE);
            break;
          }
        }

        if (!isTop) {
          const [endExpressionToken] = getToken(TOKENS.EXPRESSION_END);

          if (endExpressionToken) {
            terminateBranch();
            terminateBranch();
            break;
          }
        }

        const stringPattern = isTop ? TOKENS.STRING_OUTER : isIf ? TOKENS.STRING_IF : TOKENS.STRING_ELSE;
        const [stringToken] = getToken(stringPattern);

        branch.push(stripEscapes(stringToken));
        break;
      }

      case MODES.EXPRESSION: {
        const [variableToken, variableName] = getToken(TOKENS.VARIABLE);
        if (variableToken) {
          branch.push(getterFn, ...variableName.split('.'));

          const [conditionToken] = getToken(TOKENS.IF_START);
          if (conditionToken) {
            wrapBranchWithCondition();
            break;
          }

          const [endExpressionToken] = getToken(TOKENS.EXPRESSION_END);
          if (endExpressionToken) {
            terminateBranch();
            break;
          }

          throw new RSyntaxError(RSyntaxErrorType.EXPECTED_END, restTemplate);
        }

        const [startFunctionToken, functionName] = getToken(TOKENS.FUNCTION_START);
        if (startFunctionToken) {
          const fn = fns[functionName];

          if (!fn) {
            throw new RSyntaxError(RSyntaxErrorType.INVALID_FUNCTION, restTemplate, functionName);
          }

          branch.push(fn);
          mode = MODES.FUNCTION;
          break;
        }

        throw new RSyntaxError(RSyntaxErrorType.INVALID_EXPRESSION, restTemplate);
      }

      case MODES.FUNCTION: {
        const [separator] = getToken(TOKENS.FUNCTION_SEPARATOR);

        if (separator && branch.length === 1) {
          branch.push('');
        }

        const [endFunctionToken] = getToken(TOKENS.FUNCTION_END);
        if (endFunctionToken) {
          if (separator) {
            branch.push('');
          }

          const [parentMode] = getParentBranch();
          const isNestedArgument = parentMode === MODES.FUNCTION;
          if (isNestedArgument) {
            terminateBranch();
            break;
          }

          const [endExpressionToken] = getToken(TOKENS.EXPRESSION_END);
          if (endExpressionToken) {
            terminateBranch();
            break;
          }

          const [conditionToken] = getToken(TOKENS.IF_START);
          if (conditionToken) {
            wrapBranchWithCondition();
            break;
          }

          throw new RSyntaxError(RSyntaxErrorType.EXPECTED_END, restTemplate);
        }

        const [startFunctionToken, functionName] = getToken(TOKENS.FUNCTION_START);
        if (startFunctionToken) {
          const fn = fns[functionName];

          if (!fn) {
            throw new RSyntaxError(RSyntaxErrorType.INVALID_FUNCTION, restTemplate, functionName);
          }

          splitBranch(MODES.FUNCTION);
          branch.push(fn);
          break;
        }

        const [variableToken, variableName] = getToken(TOKENS.VARIABLE);
        if (variableToken) {
          branch.push([getterFn, ...variableName.split('.')]);
        } else {
          const [stringToken = ''] = getToken(TOKENS.STRING_FUNCTION);
          branch.push(stripEscapes(stringToken));
        }
      }
    }
  }

  if (mode !== MODES.TOP) {
    const type =
      mode === MODES.FUNCTION ? RSyntaxErrorType.UNTERMINATED_FUNCTION : RSyntaxErrorType.UNTERMINATED_EXPRESSION;
    throw new RSyntaxError(type, restTemplate);
  }

  return tree;
};
