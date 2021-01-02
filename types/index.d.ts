/// <reference types="react" />
declare const connect: (keyName: string, index?: string | number | undefined) => (Component: () => JSX.Element) => <T>(props: import("react").PropsWithChildren<T>) => JSX.Element, Capsule: (props: import("./types/createCapsule").PropsCapsule) => JSX.Element, useRender: (keyName: string, index?: string | number | undefined) => void, useLocal: typeof import("./types/useLocal").default;
declare const render: (keyName: string, index?: string | number | undefined) => boolean, renders: (keyName: string) => number;
declare function Redity(): void;
declare namespace Redity {
    var connect: (keyName: string, index?: string | number | undefined) => (Component: () => JSX.Element) => <T>(props: import("react").PropsWithChildren<T>) => JSX.Element;
    var Capsule: (props: import("./types/createCapsule").PropsCapsule) => JSX.Element;
    var useRender: (keyName: string, index?: string | number | undefined) => void;
    var render: (keyName: string, index?: string | number | undefined) => boolean;
    var renders: (keyName: string) => number;
    var useLocal: typeof import("./types/useLocal").default;
    var size: () => number;
    var version: string;
}
export default Redity;
export { connect, Capsule, useRender, render, renders, useLocal };
