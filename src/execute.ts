import type {
  ReturnValues,
  RuntyFunctionBranch,
  RuntyFunctionRestBranch,
  RuntyConditionBranch,
  RuntyConditionRestBranch,
  RuntyTemplateBranch,
  RuntyTemplateTree,
  VariableDictionary,
} from './types';
import { CONDITION } from './constants';

const walk = <V extends VariableDictionary, R extends ReturnValues<V>>(
  branch: RuntyTemplateBranch<V, R> | RuntyConditionBranch<V, R> | RuntyFunctionBranch<V, R> | string | R,
  variables: V
) => {
  if (!Array.isArray(branch)) {
    return branch;
  }

  const [firstItem, ...restBranch] = branch;

  if (firstItem === CONDITION) {
    const [condition, ifCase, elseCase = ['']] = restBranch as RuntyConditionRestBranch<V, R>;

    const conditionResult = walk(condition, variables);

    if (conditionResult === 0 || !!conditionResult) {
      return walk(ifCase, variables);
    }

    return walk(elseCase, variables);
  }

  if (typeof firstItem === 'function') {
    const args = (restBranch as RuntyFunctionRestBranch<V, R>).map((item) => walk(item, variables));

    return firstItem(args, variables);
  }

  return (branch as RuntyTemplateBranch<V, R>).map((item) => walk(item, variables));
};

export const execute = <V extends VariableDictionary, R extends ReturnValues<V>>(
  tree: RuntyTemplateTree<V, R>,
  variables: V
) => {
  const result = walk(tree, variables);

  return result.flat(Infinity) as (string | R)[];
};
