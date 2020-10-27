import { Hook, Connection, Encapsulation } from './store'
import { __keyNameIndex__ } from './utils/tools'

export default function getRenderTools(registers: Map<string, Hook | Connection | Encapsulation>) {
    /**
     * Generate render to component for yours keyName registered
     * @param keyName keyName for render
     * @param index aditional
     */
    function render(keyName: string, index?: number | string): boolean {
        const register = registers.get(__keyNameIndex__(keyName, index))
        if (register) {
            register.render()
            return true
        }
        return false
    }

    /**
     * Generate render asynchronously to component for yours keyName registered.
     * @param keyName keyName for render
     * @param index aditional
     */
    async function asyncRender(keyName: string, index?: number | string): Promise<Boolean> {
        const register = registers.get(__keyNameIndex__(keyName, index))
        if (register) {
            register.render()
            return true
        }
        return false
    }

    return {
        render,
        asyncRender
    }
}
