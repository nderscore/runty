import { runty } from 'runty';

const emptyExample = 'Empty Expressions: {%a?}{%a?:}{%a?:b}{%a?a:}';

describe(emptyExample, () => {
  const template = runty.string(emptyExample);

  it.each([
    [{}, 'Empty Expressions: b'],
    [{ a: 1 }, 'Empty Expressions: a'],
  ])('given %j, return %s', (input, output) => {
    expect(template(input)).toBe(output);
  });
});
