import { Hook, Connection, Encapsulation } from './store';
export default function renderingTypes(registers: Map<string, Hook | Connection | Encapsulation>): {
    render: (keyName: string, index?: string | number | undefined) => boolean;
    asyncRender: (keyName: string, index?: string | number | undefined) => Promise<boolean>;
    renders: (keyName: string) => number;
};
