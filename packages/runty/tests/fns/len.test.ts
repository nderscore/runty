import { len, runty } from 'runty';

describe('fn len', () => {
  const opts = { fns: { len } };

  it.each([
    ['{$len(%a)}', { a: [1, 2, 3] }, '3'],
    ['{$len(%a)}', { a: 'asdf' }, '4'],
    ['{$len(%a)}', {}, '0'],
    ['{$len(hello)}', {}, '5'],
    ['{$len()}', {}, '0'],
  ])('given %s, %j, return %s', (template, values, output) => {
    expect(runty.string(template, opts)(values)).toBe(output);
  });
});
