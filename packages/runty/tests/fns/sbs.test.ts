import { runty, sbs } from 'runty';

describe('fn sbs', () => {
  const opts = { fns: { sbs } };

  it.each([
    ['{$sbs(abcdef)}', {}, ''],
    ['{$sbs(abcdef,3)}', {}, ''],
    ['{$sbs(abcdef,3,2)}', {}, 'de'],
    ['{$sbs(abcdef,-1,1)}', {}, 'f'],
    ['{$sbs(abcdef,%a,%b)}', { a: NaN, b: NaN }, ''],
    ['{$sbs()}', {}, ''],
  ])('given %s, %j, return %s', (template, values, output) => {
    expect(runty.string(template, opts)(values)).toBe(output);
  });
});
