import { ReactNode } from 'react';
import { Hook, Connection, Encapsulation } from '../store';
export interface PropsCapsule {
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
export default function createCapsule(registers: Map<string, Hook | Connection | Encapsulation>): (props: PropsCapsule) => JSX.Element;
