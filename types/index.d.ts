/// <reference types="react" />
import useLocal from './types/useLocal';
import { PropsCapsule } from './typing';
export * from './typing';
declare const Capsule: (props: PropsCapsule) => JSX.Element;
/**
 * @deprecated use useRender or Capsule
 */
declare const connect: (keyName: string, index?: string | number | undefined) => <T>(Component: import("./typing").TypeComponent<T>) => import("./typing").Wrapped<T>;
declare const useRender: (keyName?: string | undefined, index?: string | number | undefined) => () => void;
declare const render: (keyName: string | string[], index?: string | number | undefined) => boolean, renders: (keyName: string, omits?: (string | number)[]) => number;
/**
 * Returns the number of registered components but only those that are displayed.
 */
declare function size(): number;
export { connect, Capsule, useRender, render, renders, useLocal, size };
