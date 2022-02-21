export type VariableDictionary<T = unknown> = Record<string | symbol, T>;

export type ValueOf<V extends VariableDictionary> = V[keyof V];

export type NestedValueOf<V extends VariableDictionary> = ValueOf<V> extends VariableDictionary
  ? NestedValueOf<ValueOf<V>>
  : ValueOf<V>;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface NestedVariableDictionary<T> extends VariableDictionary<T | NestedVariableDictionary<T>> {}

export type DefaultVariableDictionary = NestedVariableDictionary<string | number | boolean>;

export type ReturnValues<V extends VariableDictionary> = string | number | boolean | NestedValueOf<V>;

export interface RuntyFunction<V extends VariableDictionary, R extends ReturnValues<V>> {
  (args: R[], variables: V): R;
}

export type RuntyOptions<V extends VariableDictionary, R extends ReturnValues<V>> = {
  fns: Record<string, RuntyFunction<V, R>>;
  maxDepth: number;
};

export type RuntyPartialOptions<V extends VariableDictionary, R extends ReturnValues<V>> = {
  fns?: Record<string, RuntyFunction<V, R>>;
  maxDepth?: number;
};

export type RuntyStringTemplate<V extends VariableDictionary> = (variables: V) => string;

export type RuntyArrayTemplate<V extends VariableDictionary, R extends ReturnValues<V>> = (
  variables: V
) => (string | R)[];

export type RuntyFunctionRestBranch<V extends VariableDictionary, R extends ReturnValues<V>> = RuntyTemplateBranch<
  V,
  R
>;

export type RuntyFunctionBranch<V extends VariableDictionary, R extends ReturnValues<V>> = [
  RuntyFunction<V, R>,
  ...RuntyFunctionRestBranch<V, R>[]
];

export type RuntyConditionRestBranch<V extends VariableDictionary, R extends ReturnValues<V>> =
  | [RuntyFunctionBranch<V, R>, RuntyTemplateBranch<V, R>]
  | [RuntyFunctionBranch<V, R>, RuntyTemplateBranch<V, R>, RuntyTemplateBranch<V, R>];

export type RuntyConditionBranch<V extends VariableDictionary, R extends ReturnValues<V>> =
  | [symbol, ...RuntyConditionRestBranch<V, R>];

export type RuntyTemplateToken<V extends VariableDictionary, R extends ReturnValues<V>> = (
  | RuntyConditionBranch<V, R>
  | RuntyFunctionBranch<V, R>
)[];

export type RuntyTemplateBranch<V extends VariableDictionary, R extends ReturnValues<V>> =
  | (string | RuntyTemplateToken<V, R>)[]
  | [];

export type RuntyTemplateTree<V extends VariableDictionary, R extends ReturnValues<V>> = (
  | string
  | RuntyTemplateToken<V, R>
)[];
