import { runty } from 'runty';

const arrayExample = 'Now Playing: {%1?{%1} - }{%0}';

type ArrayDataType = { 0?: string; 1?: string };

describe(arrayExample, () => {
  const template = runty.string<ArrayDataType>(arrayExample);

  it.each([
    [undefined, 'Now Playing: '],
    [[], 'Now Playing: '],
    [['Albuquerque'], 'Now Playing: Albuquerque'],
    [['Albuquerque', 'Weird Al Yankovic'], 'Now Playing: Weird Al Yankovic - Albuquerque'],
  ])('given %j, return %s', (input, output) => {
    expect(template(input as ArrayDataType)).toBe(output);
  });
});
