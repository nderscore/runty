import { runty } from 'runty';

const customExample = 'There {$plural(%count)?are:is} {%count} item{$plural(%count)?s} in your cart.';

describe(customExample, () => {
  const template = runty({
    fns: {
      plural: ([val]) => val !== 1,
    },
  })(customExample);

  it.each([
    [{ count: 0 }, 'There are 0 items in your cart.'],
    [{ count: 1 }, 'There is 1 item in your cart.'],
    [{ count: 2 }, 'There are 2 items in your cart.'],
  ])('given %j, return %s', (input, output) => {
    expect(template(input)).toBe(output);
  });
});
