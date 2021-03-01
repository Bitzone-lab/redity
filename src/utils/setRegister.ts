import { Registered } from '../typing'
import createHash from './createHash'
import { __keyNameIndex__ } from './tools'

export default function setRegister(
    registers: Map<string, Registered>,
    props: Record<string, any>,
    setHash: (value: string) => void
) {
    function forceRender() {
        setHash(createHash())
    }

    const registered: Registered = {
        keyName: props.keyName,
        index: props.index,
        render: forceRender
    }

    registers.set(__keyNameIndex__(props.keyName, props.index), registered)
}
