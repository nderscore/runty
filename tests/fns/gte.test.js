import { gte, runty } from 'runty';

describe('fn gte', () => {
  const runt = runty({ fns: { gte } });

  it.each([
    ['{$gte(2,3)?t:f}', {}, 'f'],
    ['{$gte(3,1)?t:f}', {}, 't'],
    ['{$gte(%a,0)?t:f}', { a: 1 }, 't'],
    ['{$gte(%a,0)?t:f}', { a: 0 }, 't'],
    ['{$gte(%a,-1)?t:f}', { a: 0 }, 't'],
    ['{$gte(%a,%b)?t:f}', { a: 2, b: -1 }, 't'],
    ['{$gte(%a,%b)?t:f}', { a: 0, b: '-2' }, 't'],
    ['{$gte(%a,%b)?t:f}', { a: 'abc', b: 'def' }, 'f'],
    ['{$gte(%a,%b)?t:f}', { a: { valueOf: () => 1 }, b: { valueOf: () => 2 } }, 'f'],
  ])('given %s, %j, return %s', (template, values, output) => {
    expect(runt(template)(values)).toBe(output);
  });
});
