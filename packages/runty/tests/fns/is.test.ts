import { is, runty } from 'runty';

describe('fn is', () => {
  const opts = { fns: { is } };

  it.each([
    ['{$is(%a,%b)?t:f}', { a: NaN, b: NaN }, 't'],
    ['{$is(%a,%b)?t:f}', { a: -0, b: +0 }, 'f'],
    ['{$is(%a,%b)?t:f}', { a: false, b: '' }, 'f'],
  ])('given %s, %j, return %s', (template, values, output) => {
    expect(runty.string(template, opts)(values)).toBe(output);
  });
});
