export enum NODETYPE {
  BRANCH,
  CONDITION,
  FUNCTION,
  VALUE,
}

export type VariableDictionary<T = unknown> = Record<string | number | symbol, T>;

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

export type ValueNode<V extends VariableDictionary, R extends ReturnValues<V>> = {
  type: NODETYPE.VALUE;
  value: R;
};

export type BranchNode<V extends VariableDictionary, R extends ReturnValues<V>> = {
  type: NODETYPE.BRANCH;
  nodes: (ValueNode<V, R> | FunctionNode<V, R> | ConditionNode<V, R>)[];
};

export type FunctionNode<V extends VariableDictionary, R extends ReturnValues<V>> = {
  type: NODETYPE.FUNCTION;
  fn: RuntyFunction<V, R>;
  args: (ValueNode<V, R> | FunctionNode<V, R>)[];
};

export type ConditionNode<V extends VariableDictionary, R extends ReturnValues<V>> = {
  type: NODETYPE.CONDITION;
  condition: FunctionNode<V, R>;
  ifCase: BranchNode<V, R>;
  elseCase?: BranchNode<V, R>;
};

export type RuntyNode<V extends VariableDictionary, R extends ReturnValues<V>> =
  | BranchNode<V, R>
  | FunctionNode<V, R>
  | ConditionNode<V, R>
  | ValueNode<V, R>;
