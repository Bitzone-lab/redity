import { ReactNode } from 'react';
import { Hook, Connection, Encapsulation } from '../store';
interface PropsCapsule {
    /**
     * Your Component
     */
    children: ReactNode;
    /**
     * Key name for render
     */
    keyName: string;
    /**
     * index aditional for render
     */
    index?: string | number | undefined;
}
/**
 * Helps wrap a component where you want to render by keyName
 * @param props Props Capsule
 * @example
 * <Capsule keyName='MyKeyName' index='1'>
 *  <MyComponent>
 * </Capsule>
 */
export declare type TypeCapsule = (props: PropsCapsule) => JSX.Element;
export default function createCapsule(registers: Map<string, Hook | Connection | Encapsulation>): TypeCapsule;
export {};
//# sourceMappingURL=createCapsule.d.ts.map