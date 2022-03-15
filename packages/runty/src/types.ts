export enum NODETYPE {
  BRANCH,
  CONDITION,
  FUNCTION,
  VALUE,
}

export type VariableDictionary = Record<string | number, unknown>;

export type ValueOf<V extends VariableDictionary> = V[keyof V];

export type NestedValueOf<V extends VariableDictionary> = ValueOf<V> extends VariableDictionary
  ? ValueOf<V> | NestedValueOf<V>
  : ValueOf<V>;

export interface RuntyFunction<V extends VariableDictionary> {
  // eslint-disable-next-line @typescript-eslint/ban-types
  (args: unknown[], variables: V): unknown & {};
}

export type RuntyFunctionDictionary<V extends VariableDictionary> = Record<string, RuntyFunction<V>>;

export type ReturnValues<V extends VariableDictionary, F extends RuntyFunctionDictionary<V>> =
  | string
  | NestedValueOf<V>
  | ReturnType<ValueOf<F>>;

export type RuntyOptions<V extends VariableDictionary> = {
  fns: RuntyFunctionDictionary<V>;
  maxDepth: number;
};

export type RuntyPartialOptions<V extends VariableDictionary> = {
  fns?: RuntyFunctionDictionary<V>;
  maxDepth?: number;
};

export type ValueNode = {
  type: NODETYPE.VALUE;
  value: string;
};

export type BranchNode<V extends VariableDictionary, F extends RuntyFunctionDictionary<V>> = {
  type: NODETYPE.BRANCH;
  nodes: (ValueNode | FunctionNode<V, F> | ConditionNode<V, F>)[];
};

export type FunctionNode<V extends VariableDictionary, F extends RuntyFunctionDictionary<V>> = {
  type: NODETYPE.FUNCTION;
  fn: ValueOf<F>;
  args: (ValueNode | FunctionNode<V, F>)[];
};

export type ConditionNode<V extends VariableDictionary, F extends RuntyFunctionDictionary<V>> = {
  type: NODETYPE.CONDITION;
  condition: FunctionNode<V, F>;
  ifCase: BranchNode<V, F>;
  elseCase?: BranchNode<V, F>;
};

export type RuntyNode<V extends VariableDictionary, F extends RuntyFunctionDictionary<V>> =
  | BranchNode<V, F>
  | FunctionNode<V, F>
  | ConditionNode<V, F>
  | ValueNode;
