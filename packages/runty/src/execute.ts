import { BranchNode, ConditionNode, FunctionNode, NODETYPE, ReturnValues, VariableDictionary } from './types';

const walkFunction = <V extends VariableDictionary, R extends ReturnValues<V>>(
  node: FunctionNode<V, R>,
  variables: V
): R => {
  const { args, fn } = node;
  return fn(
    args.map((arg) => {
      if (arg.type === NODETYPE.FUNCTION) {
        return walkFunction<V, R>(arg, variables);
      }
      return arg.value;
    }),
    variables
  );
};

const walkCondition = <V extends VariableDictionary, R extends ReturnValues<V>>(
  node: ConditionNode<V, R>,
  variables: V
): R[] => {
  const { condition, ifCase, elseCase } = node;

  const conditionResult = walkFunction<V, R>(condition, variables);

  if (conditionResult === 0 || !!conditionResult) {
    return walkBranch<V, R>(ifCase, variables);
  }

  if (elseCase) {
    return walkBranch<V, R>(elseCase, variables);
  }

  return ['' as R];
};

const walkBranch = <V extends VariableDictionary, R extends ReturnValues<V>>(
  node: BranchNode<V, R>,
  variables: V
): R[] => {
  const { nodes } = node;
  return nodes.flatMap((node) => {
    if (node.type === NODETYPE.CONDITION) {
      return walkCondition<V, R>(node, variables);
    }
    if (node.type === NODETYPE.FUNCTION) {
      return [walkFunction<V, R>(node, variables)];
    }
    return [node.value];
  });
};

export const execute = <V extends VariableDictionary, R extends ReturnValues<V>>(
  tree: BranchNode<V, R>,
  variables: V = {} as V
) => walkBranch(tree, variables);
