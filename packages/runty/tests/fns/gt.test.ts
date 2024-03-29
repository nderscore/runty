import { gt, runty } from 'runty';

describe('fn gt', () => {
  const opts = { fns: { gt } };

  it.each([
    ['{$gt(2,3)?t:f}', {}, 'f'],
    ['{$gt(3,1)?t:f}', {}, 't'],
    ['{$gt(%a,0)?t:f}', { a: 1 }, 't'],
    ['{$gt(%a,0)?t:f}', { a: 0 }, 'f'],
    ['{$gt(%a,%b)?t:f}', { a: 2, b: -1 }, 't'],
    ['{$gt(%a,%b)?t:f}', { a: 0, b: '-2' }, 't'],
    ['{$gt(%a,%b)?t:f}', { a: 'abc', b: 'def' }, 'f'],
    ['{$gt(%a,%b)?t:f}', { a: { valueOf: () => 1 } as number, b: { valueOf: () => 2 } as number }, 'f'],
  ])('given %s, %j, return %s', (template, values, output) => {
    expect(runty.string(template, opts)(values)).toBe(output);
  });
});
