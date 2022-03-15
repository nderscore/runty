import { runty, slc } from 'runty';

describe('fn slc', () => {
  const opts = { fns: { slc } };

  it.each([
    ['{$slc(abc,1)}', {}, 'bc'],
    ['{$slc(%a,1)}', { a: 'aaabc' }, 'aabc'],
    ['{$slc(%a,-2)}', { a: 'aaabc' }, 'bc'],
    ['{$slc(%a,%b,%c)}', { a: 'aaabbc', b: 2, c: 4 }, 'ab'],
    ['{$slc(%a,%b,%c)}', { a: [1, 2, 3, 4, 5], b: 2, c: 4 }, '3,4'],
    ['{$slc(abc)}', {}, 'abc'],
    ['{$slc(abcdef,-2,)}', {}, 'ef'],
    ['{$slc()}', {}, ''],
  ])('given %s, %j, return %s', (template, values, output) => {
    expect(runty.string(template, opts)(values)).toBe(output);
  });
});
