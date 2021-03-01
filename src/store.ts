import { Registered } from './typing'

export default function store() {
    const registers: Map<string, Registered> = new Map()

    return {
        registers
    }
}
