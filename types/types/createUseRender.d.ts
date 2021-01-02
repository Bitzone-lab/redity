import { Hook, Connection, Encapsulation } from '../store';
export default function createUseRender(registers: Map<string, Hook | Connection | Encapsulation>): (keyName: string, index?: string | number | undefined) => void;
