import { string } from 'runty';

const simpleExample = 'Now Playing: {%artist?{%artist} - }{%song}';

describe(simpleExample, () => {
  const template = string<{
    artist?: string;
    song?: string;
  }>(simpleExample);

  it.each([
    [undefined, 'Now Playing: '],
    [{}, 'Now Playing: '],
    [{ song: 'Albuquerque' }, 'Now Playing: Albuquerque'],
    [{ artist: 'Weird Al Yankovic', song: 'Albuquerque' }, 'Now Playing: Weird Al Yankovic - Albuquerque'],
  ])('given %j, return %s', (input, output) => {
    expect(template(input)).toBe(output);
  });
});
