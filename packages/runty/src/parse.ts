import { getterFn, stripEscapes, TOKENS } from './constants';
import { RSyntaxError, RSyntaxErrorType } from './RSyntaxError';
import {
  BranchNode,
  ConditionNode,
  FunctionNode,
  NODETYPE,
  RuntyFunctionDictionary,
  RuntyNode,
  RuntyOptions,
  ValueNode,
  ValueOf,
  VariableDictionary,
} from './types';

enum MODE {
  FUNCTION,
  IF,
  ELSE,
  TOP,
}

type NodeStackEntry<V extends VariableDictionary, F extends RuntyFunctionDictionary<V>> = [MODE, RuntyNode<V, F>];

export const parse = <V extends VariableDictionary>(template: string, options: RuntyOptions<V>) => {
  const { fns, maxDepth } = options;

  const createBranch = (): BranchNode<V, typeof options['fns']> => ({
    type: NODETYPE.BRANCH,
    nodes: [],
  });

  const createFunctionExpression = (fn: ValueOf<typeof options['fns']>): FunctionNode<V, typeof options['fns']> => ({
    type: NODETYPE.FUNCTION,
    fn,
    args: [],
  });

  const createValueNode = (value: string): ValueNode => ({
    type: NODETYPE.VALUE,
    value,
  });

  const tree = createBranch();
  const stack: NodeStackEntry<V, typeof options['fns']>[] = [];

  let currentMode = MODE.TOP as MODE;
  let currentNode = tree as RuntyNode<V, typeof options['fns']>;
  let restTemplate = template;

  const getToken = (token: ValueOf<typeof TOKENS>) => {
    if (typeof token === 'string') {
      if (restTemplate[0] === token) {
        restTemplate = restTemplate.slice(1);
        return [token];
      }
      return [];
    }

    const result = restTemplate.match(token);
    if (!result || result[0].length === 0) {
      return [];
    }
    restTemplate = restTemplate.slice(result[0].length);
    return Array.from(result);
  };

  const getParentNode = () => stack[stack.length - 1];

  const splitBranch = (nextMode: MODE, nextNode: RuntyNode<V, typeof options['fns']>) => {
    stack.push([currentMode, currentNode]);
    currentMode = nextMode;
    currentNode = nextNode;
  };

  const terminateBranch = () => {
    [currentMode, currentNode] = stack.pop();
    return currentNode;
  };

  const wrapNodeWithCondition = () => {
    const ifCase = createBranch();
    const newNode: ConditionNode<V, typeof options['fns']> = {
      type: NODETYPE.CONDITION,
      condition: currentNode as FunctionNode<V, typeof options['fns']>,
      ifCase,
    };

    const [, parentNode] = getParentNode();
    const { nodes } = parentNode as BranchNode<V, typeof options['fns']>;
    nodes[nodes.length - 1] = newNode;
    currentNode = newNode;

    splitBranch(MODE.IF, ifCase);
  };

  const tryCreateVariableGetter = () => {
    const [variableToken, variableName] = getToken(TOKENS.VARIABLE);
    if (variableToken) {
      const getterNode = createFunctionExpression(getterFn);

      getterNode.args = variableName.split('.').map((str) => createValueNode(str));
      return getterNode;
    }
    return undefined;
  };

  while (restTemplate.length > 0) {
    if (stack.length > maxDepth) {
      throw new RSyntaxError(RSyntaxErrorType.NESTING_DEPTH, restTemplate);
    }

    const { type } = currentNode;
    if (type === NODETYPE.BRANCH) {
      const { nodes } = currentNode;
      const isTop = currentMode === MODE.TOP;
      const isIf = currentMode === MODE.IF;

      const [startExpressionToken] = getToken(TOKENS.EXPRESSION_START);
      if (startExpressionToken) {
        const getterNode = tryCreateVariableGetter();
        if (getterNode) {
          nodes.push(getterNode);
          splitBranch(MODE.FUNCTION, getterNode);

          const [conditionToken] = getToken(TOKENS.IF_START);
          if (conditionToken) {
            wrapNodeWithCondition();
            continue;
          }

          const [endExpressionToken] = getToken(TOKENS.EXPRESSION_END);
          if (endExpressionToken) {
            terminateBranch();
            continue;
          }

          throw new RSyntaxError(RSyntaxErrorType.EXPECTED_END, restTemplate);
        }

        const [startFunctionToken, functionName] = getToken(TOKENS.FUNCTION_START);
        if (startFunctionToken) {
          const fn = fns[functionName];

          if (!fn) {
            throw new RSyntaxError(RSyntaxErrorType.INVALID_FUNCTION, restTemplate, functionName);
          }

          const nextNode = createFunctionExpression(fn);
          nodes.push(nextNode);
          splitBranch(MODE.FUNCTION, nextNode);
          continue;
        }

        throw new RSyntaxError(RSyntaxErrorType.INVALID_EXPRESSION, restTemplate);
      }

      if (isIf) {
        const [elseConditionToken] = getToken(TOKENS.ELSE_START);
        if (elseConditionToken) {
          const previousNode = terminateBranch() as ConditionNode<V, typeof options['fns']>;
          const elseBranch = createBranch();
          previousNode.elseCase = elseBranch;
          splitBranch(MODE.ELSE, elseBranch);
          continue;
        }
      }

      if (!isTop) {
        const [endExpressionToken] = getToken(TOKENS.EXPRESSION_END);
        if (endExpressionToken) {
          terminateBranch();
          terminateBranch();
          continue;
        }
      }

      const stringPattern = isTop ? TOKENS.STRING_OUTER : isIf ? TOKENS.STRING_IF : TOKENS.STRING_ELSE;
      const [stringToken] = getToken(stringPattern);
      nodes.push(createValueNode(stripEscapes(stringToken)));
    } else if (type === NODETYPE.FUNCTION) {
      const { args } = currentNode;

      const [separator] = getToken(TOKENS.FUNCTION_SEPARATOR);
      if (separator && args.length === 0) {
        args.push(createValueNode(''));
      }

      const [endFunctionToken] = getToken(TOKENS.FUNCTION_END);
      if (endFunctionToken) {
        if (separator) {
          args.push(createValueNode(''));
        }

        const [parentMode] = getParentNode();
        const isNestedArgument = parentMode === MODE.FUNCTION;
        if (isNestedArgument) {
          terminateBranch();
          continue;
        }

        const [endExpressionToken] = getToken(TOKENS.EXPRESSION_END);
        if (endExpressionToken) {
          terminateBranch();
          continue;
        }

        const [conditionToken] = getToken(TOKENS.IF_START);
        if (conditionToken) {
          wrapNodeWithCondition();
          continue;
        }

        throw new RSyntaxError(RSyntaxErrorType.EXPECTED_END, restTemplate);
      }

      const [startFunctionToken, functionName] = getToken(TOKENS.FUNCTION_START);
      if (startFunctionToken) {
        const fn = fns[functionName];

        if (!fn) {
          throw new RSyntaxError(RSyntaxErrorType.INVALID_FUNCTION, restTemplate, functionName);
        }

        const nextNode = createFunctionExpression(fn);
        args.push(nextNode);
        splitBranch(MODE.FUNCTION, nextNode);
        continue;
      }

      const getterNode = tryCreateVariableGetter();
      if (getterNode) {
        args.push(getterNode);
      } else {
        const [stringToken = ''] = getToken(TOKENS.STRING_FUNCTION);
        args.push(createValueNode(stripEscapes(stringToken)));
      }
    }
  }

  if (currentMode !== MODE.TOP) {
    const type =
      currentMode === MODE.FUNCTION ? RSyntaxErrorType.UNTERMINATED_FUNCTION : RSyntaxErrorType.UNTERMINATED_EXPRESSION;
    throw new RSyntaxError(type, restTemplate);
  }

  return currentNode as BranchNode<V, typeof options['fns']>;
};
