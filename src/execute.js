import { CONDITION } from './constants';

const walk = (branch, variables) => {
  if (!Array.isArray(branch)) {
    return branch;
  }

  const [firstItem, ...restBranch] = branch;

  if (firstItem === CONDITION) {
    const [condition, ifCase, elseCase = ['']] = restBranch;

    const conditionResult = walk(condition, variables);

    if (conditionResult === 0 || !!conditionResult) {
      return walk(ifCase, variables);
    }

    return walk(elseCase, variables);
  }

  if (typeof firstItem === 'function') {
    const args = restBranch.map((item) => walk(item, variables));

    return firstItem(args, variables);
  }

  return branch.map((item) => walk(item, variables));
};

export const execute = (tree, variables) => {
  const result = walk(tree, variables);

  return result.flat();
};
