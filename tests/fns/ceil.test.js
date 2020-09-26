import { ceil, runty } from 'runty';

describe('fn ceil', () => {
  const runt = runty({ fns: { ceil } });

  it.each([
    ['{$ceil(%a)}', {}, '0'],
    ['{$ceil(%a)}', { a: 0.5 }, '1'],
    ['{$ceil()}', {}, 'NaN'],
  ])('given %s, %j, return %s', (template, values, output) => {
    expect(runt(template)(values)).toBe(output);
  });
});
