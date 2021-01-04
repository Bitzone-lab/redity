import { Hook, Connection, Encapsulation } from './store';
/**
 * Generate render to component for yours keyName registered
 * @param keyName keyName for render
 * @param index aditional
 * @returns if a registered component is found and deployed, it will be true.
 */
export declare type Render = (keyName: string, index?: number | string) => boolean;
/**
 * Generate render asynchronously to component for yours keyName registered.
 * @param keyName keyName for render
 * @param index aditional
 * @returns if a registered component is found and deployed, it will be true.
 */
export declare type AsyncRender = (keyName: string, index?: number | string) => Promise<boolean>;
/**
 * Generates rendering only to the components registered by their index by their keyName
 * @param keyName keyName of group for render
 * @returns Returns the amount of render generated to the components displayed by index
 */
export declare type Renders = (keyName: string) => number;
export interface RendersTypes {
    render: Render;
    asyncRender: AsyncRender;
    renders: Renders;
}
export default function renderingTypes(registers: Map<string, Hook | Connection | Encapsulation>): RendersTypes;
