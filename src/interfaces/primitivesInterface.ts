export interface ObjectOf<T> {
  [key: string]: T;
};

export interface Styles {
  [key: string]: string | ObjectOf<string>;
};

// eslint-disable-next-line id-blacklist
export type JssClass = (data?: unknown) => Record<string, string>;

export type Nullable<T> = T | null;
export type Undefinable<T> = T | undefined;
export type NoParamFunction<T> = () => T;
export type FunctionOf<T> = (params?: unknown) => T;
export type NullOrUndefined = null | undefined;

export type JsxComponent = ({ children, ...props }: {
  [x: string]: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  children: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}) => JSX.Element;

