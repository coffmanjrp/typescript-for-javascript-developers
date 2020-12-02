export {};

// type MyExclude<T, U> = T extends U ? never : T;
// type MyExclude =
//   | (string extends string | number ? never : string)
//   | (number extends string | number ? never : number)
//   | (DebugType extends string | number ? never : DebugType);
// type MyExclude = never | never | DebugType;
type MyExclude = DebugType;
type DebugType = () => void;
type SomeTypes = string | number | DebugType;
type FunctionType = Exclude<SomeTypes, string | number>;
type MyFunctionType = MyExclude;

type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;

type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;
