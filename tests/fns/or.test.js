import { or, runty } from 'runty';

describe('fn or', () => {
  const runt = runty({ fns: { or } });

  it.each([
    ['{$or()?t:f}', {}, 'f'],
    ['{$or(%a)?t:f}', { a: true }, 't'],
    ['{$or(%a,%b)?t:f}', { a: false, b: false }, 'f'],
    ['{$or(%a,%b,%c)?t:f}', { a: false, b: false, c: true }, 't'],
    ['{$or(%a,%b)?t:f}', { a: true, b: true }, 't'],
    ['{$or(%a,%b,%c)?t:f}', { a: false, b: false, c: 0 }, 't'],
  ])('given %s, %j, return %s', (template, values, output) => {
    expect(runt(template)(values)).toBe(output);
  });
});
