import useLocal from './types/useLocal';
export * from './typing';
declare const Capsule: import("./typing").TypeCapsule;
/**
 * @deprecated use useRender or Capsule
 */
declare const connect: (keyName: string, index?: string | number | undefined) => <T>(Component: import("./typing").TypeComponent<T>) => import("./typing").Wrapped<T>;
declare const useRender: import("./typing").UseRender;
declare const render: (keyName: string, index?: string | number | undefined) => boolean;
declare const renders: (keyName: string, omits?: (string | number)[]) => number;
/**
 * Returns the number of registered components but only those that are displayed.
 */
declare function size(): number;
export { connect, Capsule, useRender, render, renders, useLocal, size };
