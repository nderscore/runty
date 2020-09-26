import { lt, runty } from 'runty';

describe('fn lt', () => {
  const runt = runty({ fns: { lt } });

  it.each([
    ['{$lt(2,3)?t:f}', {}, 't'],
    ['{$lt(3,1)?t:f}', {}, 'f'],
    ['{$lt(%a,0)?t:f}', { a: 1 }, 'f'],
    ['{$lt(%a,0)?t:f}', { a: 0 }, 'f'],
    ['{$lt(%a,%b)?t:f}', { a: 2, b: -1 }, 'f'],
    ['{$lt(%a,%b)?t:f}', { a: 0, b: '-2' }, 'f'],
    ['{$lt(%a,%b)?t:f}', { a: 'abc', b: 'def' }, 't'],
    ['{$lt(%a,%b)?t:f}', { a: { valueOf: () => 1 }, b: { valueOf: () => 2 } }, 't'],
  ])('given %s, %j, return %s', (template, values, output) => {
    expect(runt(template)(values)).toBe(output);
  });
});
