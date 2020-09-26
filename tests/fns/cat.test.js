import { cat, runty } from 'runty';

describe('fn cat', () => {
  const runt = runty({ fns: { cat } });

  it.each([
    ['{$cat(%a,%b,%c)}', {}, ''],
    ['{$cat(%a,%b,%c)}', { a: 'a' }, 'a'],
    ['{$cat(%a,%b,%c)}', { a: 'a', b: 'b' }, 'ab'],
    ['{$cat(%a,%b,%c)}', { a: 'a', c: 'c' }, 'ac'],
    ['{$cat(%a,%b,%c)}', { a: 'a', b: 2, c: 'c' }, 'a2c'],
    ['{$cat(%a,%b)}', { a: true, b: 2 }, 'true2'],
    ['{$cat(%a)}', { a: 'a' }, 'a'],
  ])('given %s, %j, return %s', (template, values, output) => {
    expect(runt(template)(values)).toBe(output);
  });
});
