import { max, runty } from 'runty';

describe('fn max', () => {
  const opts = { fns: { getNull: () => null, max } };

  it.each([
    ['{$max(1,2,3)}', {}, '3'],
    ['{$max(%a)}', { a: 1 }, '1'],
    ['{$max(%a,%b,%c)}', { a: 1, b: 2, c: 3 }, '3'],
    ['{$max(%a,%b,%c)}', { a: 1, b: 2 }, '2'],
    ['{$max(%a)}', {}, '-Infinity'],
    ['{$max($getNull())}', {}, '-Infinity'],
    ['{$max()}', {}, '-Infinity'],
  ])('given %s, %j, return %s', (template, values, output) => {
    expect(runty.string(template, opts)(values)).toBe(output);
  });
});
