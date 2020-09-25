import { fns, runty } from 'runty';

const nestedExample =
  '{$gt(%count,0)?There {$eq(%count,1)?is:are} {%count} item{$not($eq(%count,1))?s} in your cart:Your cart is empty}.';

describe(nestedExample, () => {
  const template = runty({ fns })(nestedExample);

  it.each([
    [{}, 'Your cart is empty.'],
    [{ count: 0 }, 'Your cart is empty.'],
    [{ count: 1 }, 'There is 1 item in your cart.'],
    [{ count: 2 }, 'There are 2 items in your cart.'],
  ])('given %j, return %s', (input, output) => {
    expect(template(input)).toBe(output);
  });
});
