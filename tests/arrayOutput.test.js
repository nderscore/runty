import { runty } from 'runty';

describe('Array output', () => {
  const str = 'array {%something} output';
  const something = { foo: 1234 };
  const expectedOutput = ['array ', something, ' output'];

  it('triggers array output in client constructor', () => {
    const runt = runty({ asArray: true });
    expect(runt(str)({ something })).toStrictEqual(expectedOutput);
  });

  it('triggers array output in parser', () => {
    const runt = runty();
    expect(runt(str, true)({ something })).toStrictEqual(expectedOutput);
  });

  it('triggers array output at execution', () => {
    const runt = runty();
    expect(runt(str)({ something }, true)).toStrictEqual(expectedOutput);
  });
});
