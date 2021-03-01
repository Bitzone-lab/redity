import { Wrapped, TypeComponent, Registered } from '../typing';
export default function createConnect(registers: Map<string, Registered>): (keyName: string, index?: string | number | undefined) => <T>(Component: TypeComponent<T>) => Wrapped<T>;
