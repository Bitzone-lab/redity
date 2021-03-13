import React, { Fragment, useEffect, useState } from 'react'
import { PropsCapsule, Registered } from '../typing'
import createHash from '../utils/createHash'
import setRegister from '../utils/setRegister'
import { __keyNameIndex__ } from '../utils/tools'

export default function createCapsule(registers: Map<string, Registered>) {
    function Capsule<T>(props: PropsCapsule<T>): JSX.Element {
        const [, setHash] = useState(createHash())

        function deleteRegister() {
            registers.delete(__keyNameIndex__(props.keyName, props.index))
        }

        useEffect(() => {
            setRegister(registers, props, setHash)
            return () => {
                deleteRegister()
            }
        }, [])
        setRegister(registers, props, setHash)
        return <Fragment>{props.children(props.props)}</Fragment>
    }
    return Capsule
}
