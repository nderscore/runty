export type RuntyFunction = (
  args: unknown[],
  variables: Record<string, unknown>
) => string | boolean | number | typeof variables[keyof typeof variables];

export type RuntyOptions = {
  fns: Record<string, RuntyFunction>;
  maxDepth: number;
};

export type RuntyPartialOptions = Partial<RuntyOptions>;

export interface RuntyStringTemplate<V extends Record<string, unknown>> {
  (variables: V): string;
}

export interface RuntyArrayTemplate<V extends Record<string, unknown>> {
  (variables: V): (string | boolean | number | V[keyof V])[];
}

export interface RuntyParserFunction {
  <V extends Record<string, unknown> = Record<string, unknown>>(templateString: string): RuntyStringTemplate<V>;
  <V extends Record<string, unknown> = Record<string, unknown>>(
    templateString: string,
    templateAsArray: true
  ): RuntyArrayTemplate<V>;
}
