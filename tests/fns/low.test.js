import { low, runty } from 'runty';

describe('fn low', () => {
  const runt = runty({ fns: { low } });

  it.each([
    ['{$low(Hello World)}', {}, 'hello world'],
    ['{$low(%a)}', { a: 'TEST' }, 'test'],
    ['{$low()}', {}, ''],
  ])('given %s, %j, return %s', (template, values, output) => {
    expect(runt(template)(values)).toBe(output);
  });
});
