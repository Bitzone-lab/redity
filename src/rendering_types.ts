import { Registered } from './typing'
import { __separator__ } from './utils/tools'

export default function renderingTypes(registers: Map<string, Registered>) {
    function getRenderRegister(keyName: string, index: number | string): () => boolean {
        let register_finded: Registered | null = null

        registers.forEach(function (register, key) {
            const [_keyName, i] = key.split(__separator__)
            if (keyName === _keyName && index === '' && i === undefined) {
                register_finded = register
            } else if (index && _keyName === keyName && i === index.toString()) {
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

    function render(keyName: string | string[], index?: number | string): boolean {
        let rendered: boolean = false
        if (Array.isArray(keyName)) {
            for (const key of keyName) {
                rendered = getRenderRegister(key, index || '')()
            }
        } else {
            rendered = getRenderRegister(keyName, index || '')()
        }
        return rendered
    }

    function renders(keyName: string, omits: Array<string | number> = []): number {
        let count = 0
        registers.forEach(function (register, key) {
            const [_keyName, _index] = key.split(__separator__)
            if (omits.find((omit) => omit === _index)) return
            if (_keyName === keyName && _index) {
                register.render()
                count++
            }
        })

        return count
    }

    return {
        render,
        renders
    }
}
