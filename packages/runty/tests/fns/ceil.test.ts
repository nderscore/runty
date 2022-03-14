import { ceil, runty } from 'runty';

describe('fn ceil', () => {
  const opts = { fns: { ceil } };

  it.each([
    ['{$ceil(%a)}', {}, '0'],
    ['{$ceil(%a)}', { a: 0.5 }, '1'],
    ['{$ceil()}', {}, 'NaN'],
  ])('given %s, %j, return %s', (template, values, output) => {
    expect(runty.string(template, opts)(values)).toBe(output);
  });
});
