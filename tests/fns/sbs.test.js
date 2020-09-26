import { runty, sbs } from 'runty';

describe('fn sbs', () => {
  const runt = runty({ fns: { sbs } });

  it.each([
    ['{$sbs(abcdef)}', {}, ''],
    ['{$sbs(abcdef,3)}', {}, ''],
    ['{$sbs(abcdef,3,2)}', {}, 'de'],
    ['{$sbs(abcdef,-1,1)}', {}, 'f'],
    ['{$sbs(abcdef,%a,%b)}', { a: NaN, b: NaN }, ''],
    ['{$sbs()}', {}, ''],
  ])('given %s, %j, return %s', (template, values, output) => {
    expect(runt(template)(values)).toBe(output);
  });
});
