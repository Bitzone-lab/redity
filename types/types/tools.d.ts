import { Hook, Connection, Encapsulation } from '../store';
export default function tools(registers: Map<string, Hook | Connection | Encapsulation>): {
    getProps: <T = {}>(keyName: string) => T | null;
};
