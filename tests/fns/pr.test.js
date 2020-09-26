import { pr, runty } from 'runty';

describe('fn pr', () => {
  const runt = runty({ fns: { pr } });

  it.each([
    ['{$pr(foo,5)}', {}, 'foo  '],
    ['{$pr(%a,%b)}', { a: 'ab', b: 6 }, 'ab    '],
    ['{$pr(%a,%b,%c)}', { a: 1, b: 3, c: 0 }, '100'],
    ['{$pr(%a,4,0)}', { a: 2 }, '2000'],
    ['{$pr(foo)}', {}, 'foo'],
    ['{$pr()}', {}, ''],
  ])('given %s, %j, return %s', (template, values, output) => {
    expect(runt(template)(values)).toBe(output);
  });
});
