import { runty, RuntyFunction } from 'runty';

const escapesExample = 'Empty function arguments {$f(,,)}{$f(%a,,%a)}{$f(,,%a)}{$f(,%a,)}{$f(,,$f(,),,)}';

describe(escapesExample, () => {
  it('should correctly parse empty function arguments as empty strings', () => {
    const f = jest.fn((() => 'f') as RuntyFunction<{ a: string }>);

    const result = runty.string(escapesExample, {
      fns: { f },
    })({ a: 'a' });

    expect(result).toBe('Empty function arguments fffff');
    expect(f.mock.calls.length).toBe(6);
    expect(f.mock.calls[0][0]).toStrictEqual(['', '', '']);
    expect(f.mock.calls[1][0]).toStrictEqual(['a', '', 'a']);
    expect(f.mock.calls[2][0]).toStrictEqual(['', '', 'a']);
    expect(f.mock.calls[3][0]).toStrictEqual(['', 'a', '']);
    expect(f.mock.calls[4][0]).toStrictEqual(['', '']);
    expect(f.mock.calls[5][0]).toStrictEqual(['', '', 'f', '', '']);
  });
});
