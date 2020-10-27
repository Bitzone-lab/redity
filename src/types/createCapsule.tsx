import React, { ReactNode, Fragment, useEffect } from 'react'
import useForceRender from '../hooks/useForceRender'
import { Hook, Connection, Encapsulation } from '../store'
import { __keyNameIndex__ } from '../utils/tools'

export interface PropsCapsule {
    /**
     * Your Component
     */
    children: ReactNode
    /**
     * Key name for render
     */
    keyName: string
    /**
     * index aditional for render
     */
    index?: string | number | undefined
}

export default function createCapsule(registers: Map<string, Hook | Connection | Encapsulation>) {
    /**
     * Helps wrap a component where you want to render by keyName
     * @param props Props Capsule
     * @example
     * <Capsule keyName='MyKeyNameForMyComponent' index='1'>
     *  <MyComponent>
     * </Capsule>
     */
    function Capsule(props: PropsCapsule): JSX.Element {
        const [hash, forceRender ] = useForceRender()

        function setRegister() {
            const encapsulation: Encapsulation = {
                keyName: props.keyName,
                index: props.index,
                render: forceRender,
                hash
            }

            registers.set(__keyNameIndex__(props.keyName, props.index), encapsulation)
        }

        function deleteRegister() {
            registers.delete(__keyNameIndex__(props.keyName, props.index))
        }

        useEffect(() => {
            setRegister()
            return () => {
                deleteRegister()
            }
        }, [])

        setRegister()

        return <Fragment>{props.children}</Fragment>
    }

    return Capsule
}
