import { array } from 'runty';

describe('Array output', () => {
  const str = 'array {%something} output';
  const something = { foo: 1234 };
  const expectedOutput = ['array ', something, ' output'];

  it('triggers array output', () => {
    expect(array(str)({ something })).toStrictEqual(expectedOutput);
  });
});
