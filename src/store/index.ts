export interface Connection<T = {}> {
    keyName: string
    index: number | string | undefined
    props: T
    render: () => void
    hash: string
}

export interface Hook {
    keyName: string
    index: number | string | undefined
    render: () => void
    hash: string
}

export interface Encapsulation {
    keyName: string
    index: number | string | undefined
    render: () => void
    hash: string
}

export default function store() {
    const registers: Map<string, Connection | Hook | Encapsulation> = new Map()

    return {
        registers
    }
}
