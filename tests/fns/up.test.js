import { runty, up } from 'runty';

describe('fn up', () => {
  const runt = runty({ fns: { up } });

  it.each([
    ['{$up(Hello World)}', {}, 'HELLO WORLD'],
    ['{$up(%a)}', { a: 'test' }, 'TEST'],
    ['{$up()}', {}, ''],
  ])('given %s, %j, return %s', (template, values, output) => {
    expect(runt(template)(values)).toBe(output);
  });
});
