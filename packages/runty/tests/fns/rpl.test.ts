import { rpl, runty } from 'runty';

describe('fn rpl', () => {
  const opts = { fns: { rpl } };

  it.each([
    ['{$rpl(lool,o,u)}', {}, 'luul'],
    ['{$rpl(lool,o)}', {}, 'll'],
    ['{$rpl(lool)}', {}, 'lool'],
    ['{$rpl(%a,%b,%c)}', { a: '{-[]-[]-[]-}', b: '[]', c: '<!>' }, '{-<!>-<!>-<!>-}'],
    ['{$rpl()}', {}, ''],
  ])('given %s, %j, return %s', (template, values, output) => {
    expect(runty.string(template, opts)(values)).toBe(output);
  });
});
