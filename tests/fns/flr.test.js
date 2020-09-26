import { flr, runty } from 'runty';

describe('fn flr', () => {
  const runt = runty({ fns: { flr } });

  it.each([
    ['{$flr(2.3)}', {}, '2'],
    ['{$flr(%a)}', {}, '0'],
    ['{$flr(%a)}', { a: 3.3 }, '3'],
  ])('given %s, %j, return %s', (template, values, output) => {
    expect(runt(template)(values)).toBe(output);
  });
});
