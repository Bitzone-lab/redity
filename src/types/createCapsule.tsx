import React, { Fragment, useEffect } from 'react'
import { useForceRender } from '../hooks/useForceRenders'
import { Hook, Connection, Encapsulation } from '../store'
import { __keyNameIndex__ } from '../utils/tools'

interface PropsCapsule<T = any> {
    /**
     * Function Component
     */
    children: (props?: T) => JSX.Element
    /**
     * Key name for render
     */
    keyName: string
    /**
     * index aditional for render
     */
    index?: string | number | undefined
    /**
     * Send Props
     */
    props?: T
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
    function Capsule<T>(props: PropsCapsule<T>): JSX.Element {
        const [, forceRender ] = useForceRender()

        function setRegister() {
            const encapsulation: Encapsulation = {
                keyName: props.keyName,
                index: props.index,
                render: forceRender,
                props: props.props
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

        return <Fragment>{props.children(props.props)}</Fragment>
    }

    return Capsule
}
