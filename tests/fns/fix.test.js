import { fix, runty } from 'runty';

describe('fn fix', () => {
  const runt = runty({ fns: { fix } });

  it.each([
    ['{$fix(1.2345,2)}', {}, '1.23'],
    ['{$fix(%a,2)}', { a: 1.2345 }, '1.23'],
    ['{$fix(%a,%b)}', { a: 1.2345, b: 3 }, '1.234'],
    ['{$fix()}', {}, 'NaN'],
  ])('given %s, %j, return %s', (template, values, output) => {
    expect(runt(template)(values)).toBe(output);
  });
});
