import { Hook, Connection, Encapsulation } from '../store';
/**
 * Returns the props received per connection by the parent component
 * @param keyName KeyName of connection
 * @returns props
 */
export declare type GetProps<T = {}> = (keyName: string) => T | null;
export interface Tools {
    getProps: GetProps;
}
export default function tools(registers: Map<string, Hook | Connection | Encapsulation>): Tools;
//# sourceMappingURL=tools.d.ts.map