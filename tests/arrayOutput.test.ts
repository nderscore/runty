import { runty } from 'runty';

describe('Array output', () => {
  const str = 'array {%something} output';
  const something = { foo: 1234 };
  const expectedOutput = ['array ', something, ' output'];

  it('triggers array output', () => {
    expect(runty.array(str)({ something })).toStrictEqual(expectedOutput);
  });
});
