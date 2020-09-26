import { eq, runty } from 'runty';

describe('fn eq', () => {
  const runt = runty({ fns: { eq } });

  const x = {};
  const y = {};

  it.each([
    ['{$eq(%a,%b)?t:f}', {}, 't'],
    ['{$eq(%a,%b)?t:f}', { a: 1, b: 1 }, 't'],
    ['{$eq(%a,%b)?t:f}', { a: 1, b: '2' }, 'f'],
    ['{$eq(%a,%b)?t:f}', { a: 1, b: '1' }, 't'],
    ['{$eq(%a,%b)?t:f}', { a: x, b: x }, 't'],
    ['{$eq(%a,%b)?t:f}', { a: x, b: y }, 'f'],
    ['{$eq(%a,1)?t:f}', { a: 1 }, 't'],
  ])('given %s, %j, return %s', (template, values, output) => {
    expect(runt(template)(values)).toBe(output);
  });
});
