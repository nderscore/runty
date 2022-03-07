import { fns, runty } from 'runty';

const escapesExample = 'Escaped characters \\{ test {$cat(\\%test\\),\\$cat(\\))} {$eq(%x,1)?\\{\\:\\}:\\}}';

describe(escapesExample, () => {
  const template = runty.string(escapesExample, {
    fns: {
      ...fns,
      cat: ([a, b]) => a + b,
    },
  });

  it.each([
    [{}, 'Escaped characters { test %test)$cat() }'],
    [{ x: 1 }, 'Escaped characters { test %test)$cat() {:}'],
  ])('given %j, return %s', (input, output) => {
    expect(template(input)).toBe(output);
  });
});
