import { add, runty } from 'runty';

describe('fn add', () => {
  const runt = runty({ fns: { add } });

  it.each([
    ['{$add(1,2,4,2)}', {}, '9'],
    ['{$add(1,%a)}', {}, '1'],
    ['{$add(1,%a)}', { a: 2 }, '3'],
    ['{$add(%a,%b)}', { a: -1, b: 4 }, '3'],
    ['{$add(-1.2,%a)}', { a: 2 }, '0.8'],
    ['{$add()}', {}, 'NaN'],
  ])('given %s, %j, return %s', (template, values, output) => {
    expect(runt(template)(values)).toBe(output);
  });
});
