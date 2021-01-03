/// <reference types="react" />
import { Hook, Connection, Encapsulation } from '../store';
import useLocal from './useLocal';
export default function types(registers: Map<string, Hook | Connection | Encapsulation>): {
    useRender: (keyName: string, index?: string | number | undefined) => void;
    connect: (keyName: string, index?: string | number | undefined) => (Component: (props: any) => JSX.Element) => <T>(props: import("react").PropsWithChildren<T>) => JSX.Element;
    Capsule: (props: import("./createCapsule").PropsCapsule) => JSX.Element;
    useLocal: typeof useLocal;
    getProps: <T_1 = {}>(keyName: string) => T_1 | null;
};
