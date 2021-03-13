import { Registered } from '../typing';
export default function createUseRender(registers: Map<string, Registered>): (keyName?: string | undefined, index?: string | number | undefined) => () => void;
