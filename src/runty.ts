import type { RuntyOptions, RuntyParserFunction, RuntyPartialOptions } from './types';
import { execute } from './execute';
import { parse } from './parse';

export const runty = (options: RuntyPartialOptions = {}): RuntyParserFunction => {
  const opts: RuntyOptions = {
    fns: {},
    maxDepth: 8,
    ...options,
  };

  return (template, templateAsArray = false) => {
    const tree = parse(template, opts);

    if (templateAsArray) {
      return (variables = {}) => execute(tree, variables);
    }

    return (variables = {}) => execute(tree, variables).join('');
  };
};
