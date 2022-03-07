import { runty, sub } from 'runty';

describe('fn sub', () => {
  const opts = { fns: { sub } };

  it.each([
    ['{$sub(1,2,4,2)}', {}, '-7'],
    ['{$sub(1,%a)}', {}, '1'],
    ['{$sub(3,%a)}', { a: 2 }, '1'],
    ['{$sub(%a,%b)}', { a: -1, b: -4 }, '3'],
    ['{$sub(5.2,%a)}', { a: 2.1 }, '3.1'],
    ['{$sub()}', {}, 'NaN'],
  ])('given %s, %j, return %s', (template, values, output) => {
    expect(runty.string(template, opts)(values)).toBe(output);
  });
});
