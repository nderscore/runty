import { execute } from './execute';
import { parse } from './parse';

export const runty = (options = {}) => {
  const opts = {
    asArray: false,
    fns: {},
    maxDepth: 8,
    ...options,
  };

  return (template, templateAsArray) => {
    const tree = parse(template, opts);

    return (variables = {}, executeAsArray) => {
      const result = execute(tree, variables);

      if (executeAsArray ?? templateAsArray ?? opts.asArray) return result;

      return result.join('');
    };
  };
};
