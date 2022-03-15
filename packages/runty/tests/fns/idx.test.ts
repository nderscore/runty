import { idx, runty } from 'runty';

describe('fn idx', () => {
  const opts = { fns: { idx } };

  it.each([
    ['{$idx(abc,b)}', {}, '1'],
    ['{$idx(%a,b)}', { a: 'aaabc' }, '3'],
    ['{$idx(%a,%b)}', { a: 'aaabbc', b: 'c' }, '5'],
    ['{$idx(%a,%b)}', { a: 'aaabbc', b: 'd' }, '-1'],
    ['{$idx(%a,%b)}', { b: 'b' }, '-1'],
    ['{$idx(%a,%b)}', { a: ['a', 'b', 'c'], b: 'b' }, '1'],
    ['{$idx(asdf)}', {}, '-1'],
    ['{$idx()}', {}, '-1'],
  ])('given %s, %j, return %s', (template, values, output) => {
    expect(runty.string(template, opts)(values)).toBe(output);
  });
});
