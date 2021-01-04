export interface Connection<T = {}> {
    keyName: string;
    index: number | string | undefined;
    props: T;
    render: () => void | Promise<void>;
}
export interface Hook {
    keyName: string;
    index: number | string | undefined;
    render: () => void | Promise<void>;
}
export interface Encapsulation {
    keyName: string;
    index: number | string | undefined;
    render: () => void | Promise<void>;
    props?: any;
}
export default function store(): {
    registers: Map<string, Hook | Encapsulation | Connection<{}>>;
};
