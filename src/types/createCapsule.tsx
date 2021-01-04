import React, { ReactNode, Fragment, useEffect } from 'react'
import { useForceRender } from '../hooks/useForceRenders'
import { Hook, Connection, Encapsulation } from '../store'
import { __keyNameIndex__ } from '../utils/tools'

interface PropsCapsule {
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

/**
 * Helps wrap a component where you want to render by keyName
 * @param props Props Capsule
 * @example
 * <Capsule keyName='MyKeyName' index='1'>
 *  <MyComponent>
 * </Capsule>
 */
export type TypeCapsule = (props: PropsCapsule) => JSX.Element

export default function createCapsule(registers: Map<string, Hook | Connection | Encapsulation>): TypeCapsule {
    /**
    * Helps wrap a component where you want to render by keyName
    * @param props Props Capsule
    * @example
    * <Capsule keyName='MyKeyName' index='1'>
    *  <MyComponent>
    * </Capsule>
    */
    function Capsule(props: PropsCapsule): JSX.Element {
        const [, forceRender ] = useForceRender()

        function setRegister() {
            const encapsulation: Encapsulation = {
                keyName: props.keyName,
                index: props.index,
                render: forceRender
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
