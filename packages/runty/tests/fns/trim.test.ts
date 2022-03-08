import { runty, trim } from 'runty';

describe('fn trim', () => {
  const opts = { fns: { trim } };

  it.each([
    ['{$trim( abc )}', {}, 'abc'],
    ['{$trim(\t \t a b c \t \t)}', {}, 'a b c'],
    ['{$trim(%a)}', { a: '  xx' }, 'xx'],
    ['{$trim()}', {}, ''],
  ])('given %s, %j, return %s', (template, values, output) => {
    expect(runty.string(template, opts)(values)).toBe(output);
  });
});
