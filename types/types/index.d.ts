/// <reference types="react" />
import { TypeCapsule } from "./createCapsule";
import { Hook, Connection, Encapsulation } from '../store';
import useLocal from './useLocal';
export default function types(registers: Map<string, Hook | Connection | Encapsulation>): {
    useRender: import("./createUseRender").UseRender;
    connect: (keyName: string, index?: string | number | undefined) => <T>(Component: (props: import("react").PropsWithChildren<T>) => JSX.Element) => import("./createConnect").Wrapped<T>;
    Capsule: TypeCapsule;
    useLocal: typeof useLocal;
    getProps: import("./tools").GetProps<{}>;
};
