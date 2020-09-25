import { CONDITION, GETTER_FN, MODES, TOKENS } from './constants';

// FIXME: Populate errors with useful syntax error messages

export const parse = (template, options) => {
  const { fns, maxDepth } = options;

  const tree = [];
  const stack = [];

  let branch = tree;
  let restTemplate = template;
  let mode = MODES.TOP;

  const getToken = (regex) => {
    if (!regex) throw new Error();
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
    [mode, branch] = stack.pop() ?? [];
  };

  while (restTemplate.length > 0) {
    if (stack.length > maxDepth) {
      throw new Error();
    }

    switch (mode) {
      case MODES.TOP:
      case MODES.IF:
      case MODES.ELSE: {
        const isTop = mode === MODES.TOP;
        const isIf = mode === MODES.IF;

        const stringPattern = isTop ? TOKENS.STRING_OUTER : isIf ? TOKENS.STRING_IF : TOKENS.STRING_ELSE;
        const [stringToken] = getToken(stringPattern);

        if (stringToken) {
          branch.push(stringToken);
          break;
        }

        const [startExpressionToken] = getToken(TOKENS.EXPRESSION_START);
        if (startExpressionToken) {
          splitBranch(MODES.EXPRESSION);
          break;
        }

        if (!isTop) {
          if (isIf) {
            const [elseConditionToken] = getToken(TOKENS.ELSE_START);
            if (elseConditionToken) {
              terminateBranch();
              splitBranch(MODES.ELSE);
              break;
            }
          }

          const [endExpressionToken] = getToken(TOKENS.EXPRESSION_END);
          if (endExpressionToken) {
            terminateBranch();
            terminateBranch();
          }
        }

        break;
      }

      case MODES.EXPRESSION: {
        const [variableToken, variableName] = getToken(TOKENS.VARIABLE);
        if (variableToken) {
          branch.push(GETTER_FN, ...variableName.split('.'));

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

          throw new Error();
        }

        const [startFunctionToken, functionName] = getToken(TOKENS.FUNCTION_START);
        if (startFunctionToken) {
          const fn = fns[functionName];

          if (!fn) {
            throw new Error();
          }

          branch.push(fn);
          mode = MODES.FUNCTION;
          break;
        }

        throw new Error();
      }

      case MODES.FUNCTION: {
        const [endFunctionToken] = getToken(TOKENS.FUNCTION_END);
        if (endFunctionToken) {
          const [parentMode] = getParentBranch();
          const isNestedArgument = parentMode === MODES.FUNCTION;
          if (isNestedArgument) {
            terminateBranch();
            void getToken(TOKENS.FUNCTION_SEPARATOR);
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

          throw new Error();
        }

        const [startFunctionToken, functionName] = getToken(TOKENS.FUNCTION_START);
        if (startFunctionToken) {
          const fn = fns[functionName];

          if (!fn) {
            throw new Error();
          }

          splitBranch(MODES.FUNCTION);
          branch.push(fn);
          break;
        }

        const [variableToken, variableName] = getToken(TOKENS.VARIABLE);
        if (variableToken) {
          branch.push([GETTER_FN, ...variableName.split('.')]);
        } else {
          const [stringToken] = getToken(TOKENS.STRING_FUNCTION);
          if (stringToken) {
            branch.push(stringToken);
          } else {
            throw new Error();
          }
        }

        void getToken(TOKENS.FUNCTION_SEPARATOR);
      }
    }
  }

  if (mode !== MODES.TOP) {
    throw new Error();
  }

  return tree;
};
