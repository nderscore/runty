import { and, runty } from 'runty';

describe('fn and', () => {
  const runt = runty({ fns: { and } });

  it.each([
    ['{$and(%a,%b,%c)?t:f}', {}, 'f'],
    ['{$and(%a,%b,%c)?t:f}', { a: 1, b: true, c: 0 }, 't'],
    ['{$and(%a,%b)?t:f}', { a: '', b: 'bar' }, 'f'],
    ['{$and(%a,%b)?t:f}', { a: 'foo', b: 'bar' }, 't'],
    ['{$and(%a)?t:f}', { a: true }, 't'],
    ['{$and()?t:f}', {}, 'f'],
  ])('given %s, %j, return %s', (template, values, output) => {
    expect(runt(template)(values)).toBe(output);
  });
});
