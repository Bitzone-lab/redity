import { Registered } from './typing';
export default function renderingTypes(registers: Map<string, Registered>): {
    render: (keyName: string | string[], index?: string | number | undefined) => boolean;
    renders: (keyName: string, omits?: Array<string | number>) => number;
};
