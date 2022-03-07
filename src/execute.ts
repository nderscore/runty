import {
  BranchNode,
  ConditionNode,
  FunctionNode,
  NODETYPE,
  ReturnValues,
  ValueNode,
  VariableDictionary,
} from './types';

const walk = <V extends VariableDictionary, R extends ReturnValues<V>>(
  node: BranchNode<V, R> | ConditionNode<V, R> | FunctionNode<V, R> | ValueNode<V, R>,
  variables: V
): R[] => {
  const { type } = node;

  if (type === NODETYPE.VALUE) {
    return [node.value];
  }

  if (type === NODETYPE.CONDITION) {
    const { condition, ifCase, elseCase } = node;

    const [conditionResult] = walk(condition, variables);

    if (conditionResult === 0 || !!conditionResult) {
      return walk(ifCase, variables);
    }

    if (elseCase) {
      return walk(elseCase, variables);
    }

    return ['' as R];
  }

  if (type === NODETYPE.FUNCTION) {
    const { args, fn } = node;
    return [
      fn(
        args.flatMap((arg) => walk(arg, variables)),
        variables
      ),
    ];
  }

  const { nodes } = node;
  return nodes.flatMap((node) => walk(node, variables));
};

export const execute = <V extends VariableDictionary, R extends ReturnValues<V>>(
  tree: BranchNode<V, R>,
  variables: V = {} as V
) => walk(tree, variables);
