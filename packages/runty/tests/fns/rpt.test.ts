import { rpt, runty } from 'runty';

describe('fn rpt', () => {
  const opts = { fns: { rpt } };

  it.each([
    ['{$rpt(abc)}', {}, ''],
    ['{$rpt(abc,3)}', {}, 'abcabcabc'],
    ['{$rpt(abc,-2)}', {}, ''],
    ['{$rpt(%a,%b)}', { a: 'x', b: 8 }, 'xxxxxxxx'],
    ['{$rpt(x,%a)}', { a: NaN }, ''],
    ['{$rpt()}', {}, ''],
  ])('given %s, %j, return %s', (template, values, output) => {
    expect(runty.string(template, opts)(values)).toBe(output);
  });
});
