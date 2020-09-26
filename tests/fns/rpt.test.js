import { rpt, runty } from 'runty';

describe('fn rpt', () => {
  const runt = runty({ fns: { rpt } });

  it.each([
    ['{$rpt(abc)}', {}, ''],
    ['{$rpt(abc,3)}', {}, 'abcabcabc'],
    ['{$rpt(abc,-2)}', {}, ''],
    ['{$rpt(%a,%b)}', { a: 'x', b: 8 }, 'xxxxxxxx'],
    ['{$rpt(x,%a)}', { a: NaN }, ''],
    ['{$rpt()}', {}, ''],
  ])('given %s, %j, return %s', (template, values, output) => {
    expect(runt(template)(values)).toBe(output);
  });
});
