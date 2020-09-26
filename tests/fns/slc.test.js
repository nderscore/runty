import { runty, slc } from 'runty';

describe('fn slc', () => {
  const runt = runty({ fns: { slc } });

  it.each([
    ['{$slc(abc,1)}', {}, 'bc'],
    ['{$slc(%a,1)}', { a: 'aaabc' }, 'aabc'],
    ['{$slc(%a,-2)}', { a: 'aaabc' }, 'bc'],
    ['{$slc(%a,%b,%c)}', { a: 'aaabbc', b: 2, c: 4 }, 'ab'],
    ['{$slc(%a,%b,%c)}', { a: [1, 2, 3, 4, 5], b: 2, c: 4 }, '34'],
    ['{$slc(abc)}', {}, 'abc'],
    ['{$slc()}', {}, ''],
  ])('given %s, %j, return %s', (template, values, output) => {
    expect(runt(template)(values)).toBe(output);
  });
});
