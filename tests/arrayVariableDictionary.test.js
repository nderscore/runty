import { runty } from 'runty';

const arrayExample = 'Now Playing: {%1?{%1} - }{%0}';

describe(arrayExample, () => {
  const template = runty()(arrayExample);

  it.each([
    [undefined, 'Now Playing: '],
    [[], 'Now Playing: '],
    [['Albuquerque'], 'Now Playing: Albuquerque'],
    [['Albuquerque', 'Weird Al Yankovic'], 'Now Playing: Weird Al Yankovic - Albuquerque'],
  ])('given %j, return %s', (input, output) => {
    expect(template(input)).toBe(output);
  });
});
