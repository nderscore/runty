import { mul, runty } from 'runty';

describe('fn mul', () => {
  const runt = runty({ fns: { mul } });

  it.each([
    ['{$mul(1,2,4,2)}', {}, '16'],
    ['{$mul(1,%a)}', {}, '0'],
    ['{$mul(2,%a)}', { a: 3 }, '6'],
    ['{$mul(%a,%b)}', { a: -1, b: 4 }, '-4'],
    ['{$mul(-1.2,%a)}', { a: 2 }, '-2.4'],
    ['{$mul()}', {}, 'NaN'],
  ])('given %s, %j, return %s', (template, values, output) => {
    expect(runt(template)(values)).toBe(output);
  });
});
