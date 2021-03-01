import { Registered } from './typing';
export default function renderingTypes(registers: Map<string, Registered>): {
    render: (keyName: string, index?: string | number | undefined) => boolean;
    asyncRender: (keyName: string, index?: string | number | undefined) => Promise<boolean>;
    renders: (keyName: string, omits?: Array<string | number>) => number;
};
