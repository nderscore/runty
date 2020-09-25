import { fns, runty } from 'runty';

const simpleExample = 'Now Playing: {%artist?{%artist} - }{%song}';
describe(simpleExample, () => {
  const runt = runty();
  const template = runt(simpleExample);

  it.each([
    [undefined, 'Now Playing: '],
    [{}, 'Now Playing: '],
    [{ song: 'Albuquerque' }, 'Now Playing: Albuquerque'],
    [{ artist: 'Weird Al Yankovic', song: 'Albuquerque' }, 'Now Playing: Weird Al Yankovic - Albuquerque'],
  ])('given %j, return %s', (input, output) => {
    expect(template(input)).toBe(output);
  });
});

const arrayExample = 'Now Playing: {%1?{%1} - }{%0}';
describe(arrayExample, () => {
  const runt = runty();
  const template = runt(arrayExample);

  it.each([
    [undefined, 'Now Playing: '],
    [[], 'Now Playing: '],
    [['Albuquerque'], 'Now Playing: Albuquerque'],
    [['Albuquerque', 'Weird Al Yankovic'], 'Now Playing: Weird Al Yankovic - Albuquerque'],
  ])('given %j, return %s', (input, output) => {
    expect(template(input)).toBe(output);
  });
});

const complexExample =
  '{$gt(%count,0)?There {$eq(%count,1)?is:are} {%count} item{$not($eq(%count,1))?s} in your cart:Your cart is empty}.';
describe(complexExample, () => {
  const runt = runty({ fns });
  const template = runt(complexExample);

  it.each([
    [{}, 'Your cart is empty.'],
    [{ count: 0 }, 'Your cart is empty.'],
    [{ count: 1 }, 'There is 1 item in your cart.'],
    [{ count: 2 }, 'There are 2 items in your cart.'],
  ])('given %j, return %s', (input, output) => {
    expect(template(input)).toBe(output);
  });
});

const customExample = 'There {$plural(%count)?are:is} {%count} item{$plural(%count)?s} in your cart.';
describe(customExample, () => {
  const runt = runty({
    fns: {
      plural: ([val]) => val !== 1,
    },
  });
  const template = runt(customExample);

  it.each([
    [{ count: 0 }, 'There are 0 items in your cart.'],
    [{ count: 1 }, 'There is 1 item in your cart.'],
    [{ count: 2 }, 'There are 2 items in your cart.'],
  ])('given %j, return %s', (input, output) => {
    expect(template(input)).toBe(output);
  });
});

const deepExample = 'Going deep: {%goes.deep} {%goes.even.deeper}.';
describe(deepExample, () => {
  const runt = runty();
  const template = runt(deepExample);

  it.each([
    [undefined, 'Going deep:  .'],
    [{}, 'Going deep:  .'],
    [{ goes: {} }, 'Going deep:  .'],
    [{ goes: { deep: 1 } }, 'Going deep: 1 .'],
    [{ goes: { deep: 1, even: {} } }, 'Going deep: 1 .'],
    [{ goes: { deep: 1, even: { deeper: 2 } } }, 'Going deep: 1 2.'],
  ])('given %j, return %s', (input, output) => {
    expect(template(input)).toBe(output);
  });
});
