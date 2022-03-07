import { runty, up } from 'runty';

describe('fn up', () => {
  const opts = { fns: { up } };

  it.each([
    ['{$up(Hello World)}', {}, 'HELLO WORLD'],
    ['{$up(%a)}', { a: 'test' }, 'TEST'],
    ['{$up()}', {}, ''],
  ])('given %s, %j, return %s', (template, values, output) => {
    expect(runty.string(template, opts)(values)).toBe(output);
  });
});
