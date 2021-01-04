import { TypeCapsule } from "./createCapsule";
import { Hook, Connection, Encapsulation } from '../store';
import { Connect } from "./createConnect";
import { UseRender } from "./createUseRender";
import useLocal from './useLocal';
import { GetProps } from './tools';
export default function types(registers: Map<string, Hook | Connection | Encapsulation>): {
    useRender: UseRender;
    connect: Connect<{}>;
    Capsule: TypeCapsule;
    useLocal: typeof useLocal;
    getProps: GetProps<{}>;
};
