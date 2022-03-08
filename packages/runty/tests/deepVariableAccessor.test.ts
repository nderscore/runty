import { runty } from 'runty';

const deepExample = 'Going deep: {%goes.deep} - {%goes.even.0.deeper}.';

describe(deepExample, () => {
  const template = runty.string(deepExample);

  it.each([
    [undefined, 'Going deep:  - .'],
    [{}, 'Going deep:  - .'],
    [{ goes: {} }, 'Going deep:  - .'],
    [{ goes: { deep: 1 } }, 'Going deep: 1 - .'],
    [{ goes: { deep: 1, even: {} } }, 'Going deep: 1 - .'],
    [{ goes: { deep: 1, even: { 0: { deeper: 2 } } } }, 'Going deep: 1 - 2.'],
  ])('given %j, return %s', (input, output) => {
    expect(template(input)).toBe(output);
  });
});
