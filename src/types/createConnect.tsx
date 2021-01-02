import React, { Fragment, useEffect } from 'react'
import { useForceRender } from '../hooks/useForceRenders'
import { Hook, Connection, Encapsulation } from '../store'
import { __keyNameIndex__ } from '../utils/tools'
interface PropsConnect {
    keyName: string
    index: string | number | undefined
    Component: (props: any) => JSX.Element
}

export default function createConnect(registers: Map<string, Hook | Connection | Encapsulation>) {

    const propsConnect: PropsConnect = {
        keyName: '',
        index: undefined,
        Component: () => <Fragment />
    }

    function WrappedComponent<T>(props: React.PropsWithChildren<T>) {
        const { keyName, index, Component } = propsConnect
        const [, forceRender] = useForceRender()

        function setRegister() {
            const connection: Connection = {
                keyName,
                index,
                render: forceRender,
                props
            }

            registers.set(__keyNameIndex__(keyName, index), connection)
        }

        function deleteRegister() {
            registers.delete(__keyNameIndex__(keyName, index))
        }

        useEffect(() => {
            setRegister()
            return () => {
                deleteRegister()
            }
        }, [])

        setRegister()
        return <Component {...props} />
    }

    /**
     * Register component for render by key name
     * @param keyName key name
     * @param index index
     */
    function connect(keyName: string, index?: string | number) {
        return function (Component: () => JSX.Element) {
            propsConnect.keyName = keyName
            propsConnect.index = index
            propsConnect.Component = Component
            return WrappedComponent  
        }
    }

    return connect
}
