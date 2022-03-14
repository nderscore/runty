import { not, runty } from 'runty';

describe('fn not', () => {
  const opts = { fns: { not } };

  it.each([
    ['{$not(%a)?t:f}', { a: true }, 'f'],
    ['{$not(%a)?t:f}', { a: false }, 't'],
    ['{$not(%a)?t:f}', { a: 0 }, 'f'],
  ])('given %s, %j, return %s', (template, values, output) => {
    expect(runty.string(template, opts)(values)).toBe(output);
  });
});
