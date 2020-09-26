import { pl, runty } from 'runty';

describe('fn pl', () => {
  const runt = runty({ fns: { pl } });

  it.each([
    ['{$pl(foo,5)}', {}, '  foo'],
    ['{$pl(%a,%b)}', { a: 'ab', b: 6 }, '    ab'],
    ['{$pl(%a,%b,%c)}', { a: 1, b: 3, c: 0 }, '001'],
    ['{$pl(%a,4,0)}', { a: 2 }, '0002'],
    ['{$pl(foo)}', {}, 'foo'],
    ['{$pl()}', {}, ''],
  ])('given %s, %j, return %s', (template, values, output) => {
    expect(runt(template)(values)).toBe(output);
  });
});
