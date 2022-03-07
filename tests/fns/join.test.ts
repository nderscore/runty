import { join, NestedVariableDictionary, runty } from 'runty';

describe('fn join', () => {
  const opts = { fns: { join } };

  it.each([
    ['{$join(%a)}', { a: [1, 2, 3] }, '123'],
    ['{$join(%a,\\, )}', { a: [1, 2, 3, 4] }, '1, 2, 3, 4'],
    ['{$join(%a)}', { a: 3 }, ''],
  ])('given %s, %j, return %s', (template, values, output) => {
    expect(runty.string<NestedVariableDictionary<string | number | number[]>>(template, opts)(values)).toBe(output);
  });
});
