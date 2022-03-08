import { lte, runty } from 'runty';

describe('fn lte', () => {
  const opts = { fns: { lte } };

  it.each([
    ['{$lte(2,3)?t:f}', {}, 't'],
    ['{$lte(3,1)?t:f}', {}, 'f'],
    ['{$lte(%a,0)?t:f}', { a: 1 }, 'f'],
    ['{$lte(%a,0)?t:f}', { a: 0 }, 't'],
    ['{$lte(%a,-1)?t:f}', { a: 0 }, 'f'],
    ['{$lte(%a,%b)?t:f}', { a: 2, b: -1 }, 'f'],
    ['{$lte(%a,%b)?t:f}', { a: 0, b: '-2' }, 'f'],
    ['{$lte(%a,%b)?t:f}', { a: 'abc', b: 'def' }, 't'],
    ['{$lte(%a,%b)?t:f}', { a: { valueOf: () => 1 } as number, b: { valueOf: () => 2 } as number }, 't'],
  ])('given %s, %j, return %s', (template, values, output) => {
    expect(runty.string(template, opts)(values)).toBe(output);
  });
});
