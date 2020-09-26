import { div, runty } from 'runty';

describe('fn div', () => {
  const runt = runty({ fns: { div } });

  it.each([
    ['{$div(%a)}', {}, '0'],
    ['{$div(%a)}', { a: 1 }, '1'],
    ['{$div(%a,%b)}', { a: 5 }, 'Infinity'],
    ['{$div(%a,%b)}', { a: 5, b: 3 }, '1.6666666666666667'],
    ['{$div(%a,3)}', { a: 5 }, '1.6666666666666667'],
    ['{$div()}', {}, 'NaN'],
  ])('given %s, %j, return %s', (template, values, output) => {
    expect(runt(template)(values)).toBe(output);
  });
});
