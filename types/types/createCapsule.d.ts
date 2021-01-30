/// <reference types="react" />
import { Hook, Connection, Encapsulation } from '../store';
interface PropsCapsule<T = any> {
    /**
     * Function Component
     */
    children: (props?: T) => JSX.Element;
    /**
     * Key name for render
     */
    keyName: string;
    /**
     * index aditional for render
     */
    index?: string | number | undefined;
    /**
     * Send Props
     */
    props?: T;
}
export interface TypeCapsule {
    /**
     * Helps wrap a component where you want to render by keyName
     * @param props Props Capsule
     * @example
     * <Capsule keyName='MyKeyName' index='1'>
     *  <MyComponent>
     * </Capsule>
     */
    (props: PropsCapsule): JSX.Element;
}
export default function createCapsule(registers: Map<string, Hook | Connection | Encapsulation>): TypeCapsule;
export {};
