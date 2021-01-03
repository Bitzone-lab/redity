import { Hook, Connection, Encapsulation } from './store'
import { __separator__ } from './utils/tools'

export default function renderingTypes(registers: Map<string, Hook | Connection | Encapsulation>) {
    function getRenderRegister(keyName: string, index: number | string): () => boolean {
        let register_finded: Hook | Connection | Encapsulation | null = null

        registers.forEach(function (register, key) {
            const [_keyName, _index] = key.split(__separator__)
            if (keyName === _keyName && index === '') {
                register_finded = register
            } else if (index && _keyName === keyName && _index === index.toString()) {
                register_finded = register
            }
        })

        return function (): boolean {
            if (register_finded) {
                register_finded.render()
                return true
            }
            return false
        }
    }
    /**
     * Generate render to component for yours keyName registered
     * @param keyName keyName for render
     * @param index aditional
     * @returns if a registered component is found and deployed, it will be true.
     */
    function render(keyName: string, index?: number | string): boolean {
        const render = getRenderRegister(keyName, index || '')
        return render()
    }

    /**
     * Generate render asynchronously to component for yours keyName registered.
     * @param keyName keyName for render
     * @param index aditional
     * @returns if a registered component is found and deployed, it will be true.
     */
    async function asyncRender(keyName: string, index?: number | string): Promise<boolean> {
        const render = getRenderRegister(keyName, index || '')
        return render()
    }

    /**
     * Generates rendering only to the components registered by their index by their keyName
     * @param keyName keyName of group for render
     * @returns Returns the amount of render generated to the components displayed by index
     */
    function renders(keyName: string): number {
        let count = 0
        registers.forEach(function (register, key) {
            const [_keyName, _index] = key.split(__separator__)

            if (_keyName === keyName && _index) {
                register.render()
                count++
            }
        })

        return count
    }

    return {
        render,
        asyncRender,
        renders
    }
}