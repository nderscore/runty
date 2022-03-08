import { $, runty } from 'runty';

describe('fn $', () => {
  const opts = { fns: { $ } };

  it.each([
    ['{$$(%key)}', {}, ''],
    ['{$$(%key)}', { key: 'foo' }, ''],
    ['{$$(%key)}', { key: 'foo', foo: 'bar' }, 'bar'],
    ['{$$(key)}', { key: 'foo' }, 'foo'],
    ['{$$(key,deep)}', { key: { deep: 'foo' } }, 'foo'],
    ['{$$()}', { key: 'foo' }, ''],
  ])('given %s, %j, return %s', (template, values, output) => {
    expect(runty.string(template, opts)(values)).toBe(output);
  });
});
