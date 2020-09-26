import { rnd, runty } from 'runty';

describe('fn rnd', () => {
  const runt = runty({ fns: { rnd } });

  it.each([
    ['{$rnd(1)}', {}, '1'],
    ['{$rnd(4.1)}', {}, '4'],
    ['{$rnd(4.6)}', {}, '5'],
    ['{$rnd(-1.499999999)}', {}, '-1'],
    ['{$rnd(%a)}', { a: 8.49 }, '8'],
    ['{$rnd()}', {}, 'NaN'],
  ])('given %s, %j, return %s', (template, values, output) => {
    expect(runt(template)(values)).toBe(output);
  });
});
