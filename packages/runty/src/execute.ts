import {
  BranchNode,
  ConditionNode,
  FunctionNode,
  NODETYPE,
  ReturnValues,
  RuntyFunctionDictionary,
  VariableDictionary,
} from './types';

const walkFunction = <V extends VariableDictionary, F extends RuntyFunctionDictionary<V>>(
  node: FunctionNode<V, F>,
  variables: V
) => {
  const { args, fn } = node;
  return fn(
    args.map((arg) => {
      if (arg.type === NODETYPE.FUNCTION) {
        return walkFunction<V, F>(arg, variables);
      }
      return arg.value;
    }),
    variables
  );
};

const walkCondition = <V extends VariableDictionary, F extends RuntyFunctionDictionary<V>>(
  node: ConditionNode<V, F>,
  variables: V
): ReturnValues<V, F>[] => {
  const { condition, ifCase, elseCase } = node;

  const conditionResult = walkFunction<V, F>(condition, variables);

  if (conditionResult === 0 || !!conditionResult) {
    return walkBranch<V, F>(ifCase, variables);
  }

  if (elseCase) {
    return walkBranch<V, F>(elseCase, variables);
  }

  return [''];
};

const walkBranch = <V extends VariableDictionary, F extends RuntyFunctionDictionary<V>>(
  node: BranchNode<V, F>,
  variables: V
): ReturnValues<V, F>[] => {
  const { nodes } = node;
  return nodes.flatMap((node) => {
    if (node.type === NODETYPE.CONDITION) {
      return walkCondition<V, F>(node, variables);
    }
    if (node.type === NODETYPE.FUNCTION) {
      return [walkFunction<V, F>(node, variables)];
    }
    return [node.value];
  });
};

export const execute = <V extends VariableDictionary, F extends RuntyFunctionDictionary<V>>(
  tree: BranchNode<V, F>,
  variables: V = {} as V
) => walkBranch<V, F>(tree, variables);
