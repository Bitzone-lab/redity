import { Hook, Connection, Encapsulation } from './store';
export interface Render {
    /**
     * Generate render to component for yours keyName registered
     * @param keyName keyName for render
     * @param index aditional
     * @returns if a registered component is found and deployed, it will be true.
     */
    (keyName: string, index?: number | string): boolean;
}
export interface AsyncRender {
    /**
     * Generate render asynchronously to component for yours keyName registered.
     * @param keyName keyName for render
     * @param index aditional
     * @returns if a registered component is found and deployed, it will be true.
     */
    (keyName: string, index?: number | string): Promise<boolean>;
}
export interface Renders {
    /**
     * Generates rendering only to the components registered by their index by their keyName
     * @param keyName keyName of group for render
     * @param omits omit index
     * @returns Returns the amount of render generated to the components displayed by index
     */
    (keyName: string, omits?: Array<string | number>): number;
}
export interface RendersTypes {
    render: Render;
    asyncRender: AsyncRender;
    renders: Renders;
}
export default function renderingTypes(registers: Map<string, Hook | Connection | Encapsulation>): RendersTypes;
