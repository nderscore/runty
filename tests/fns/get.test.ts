import { get, runty } from 'runty';

describe('fn get', () => {
  const opts = { fns: { get } };

  it.each([
    ['{$get(%a,b)}', { a: { b: 1 } }, '1'],
    ['{$get(%a,b,c)}', { a: { b: { c: 2 } } }, '2'],
    ['{$get(%a,b,c)}', {}, ''],
    ['{$get(%a,%b)}', { a: { c: 3 }, b: 'c' }, '3'],
    ['{$get(%a,%b,%c)}', { b: 'b', c: 'c' }, ''],
    ['{$get()}', {}, ''],
  ])('given %s, %j, return %s', (template, values, output) => {
    expect(runty.string(template, opts)(values)).toBe(output);
  });
});
