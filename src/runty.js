import { execute } from './execute';
import { parse } from './parse';

export const runty = (options = {}) => {
  const opts = {
    asArray: false,
    functions: {},
    maxDepth: 8,
    ...options,
  };

  return (template) => {
    const tree = parse(template, opts);

    return (variables = {}, asArray) => {
      const result = execute(tree, variables);

      if (asArray ?? opts.asArray) return result;

      return result.join('');
    };
  };
};
