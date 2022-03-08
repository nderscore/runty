import { min, runty } from 'runty';

describe('fn min', () => {
  const opts = { fns: { getNull: () => null, min } };

  it.each([
    ['{$min(1,2,3)}', {}, '1'],
    ['{$min(%a)}', { a: 1 }, '1'],
    ['{$min(%a,%b,%c)}', { a: 0, b: 1, c: 2 }, '0'],
    ['{$min(%a,%b,%c)}', { a: 1, b: 2 }, '1'],
    ['{$min(%a)}', {}, 'Infinity'],
    ['{$min($getNull())}', {}, 'Infinity'],
    ['{$min()}', {}, 'Infinity'],
  ])('given %s, %j, return %s', (template, values, output) => {
    expect(runty.string(template, opts)(values)).toBe(output);
  });
});
