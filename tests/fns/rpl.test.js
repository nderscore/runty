import { rpl, runty } from 'runty';

describe('fn rpl', () => {
  const runt = runty({ fns: { rpl } });

  it.each([
    ['{$rpl(lool,o,u)}', {}, 'luul'],
    ['{$rpl(lool,o)}', {}, 'll'],
    ['{$rpl(lool)}', {}, 'lool'],
    ['{$rpl(%a,%b,%c)}', { a: '{-[]-[]-[]-}', b: '[]', c: '<!>' }, '{-<!>-<!>-<!>-}'],
    ['{$rpl()}', {}, ''],
  ])('given %s, %j, return %s', (template, values, output) => {
    expect(runt(template)(values)).toBe(output);
  });
});
