import React, { Fragment, useEffect } from 'react'
import useForceRender from '../hooks/useForceRender'
import { Hook, Connection, Encapsulation } from '../store'
import { __keyNameIndex__ } from '../utils/tools'

export default function createConnect(registers: Map<string, Hook | Connection | Encapsulation>) {
    interface PropsConnect {
        keyName: string
        index: string | number | undefined
        Component: (props: any) => JSX.Element
    }

    const propsConnect: PropsConnect = {
        keyName: '',
        index: undefined,
        Component: () => <Fragment />
    }

    function WrappedComponent<T>(props: React.PropsWithChildren<T>) {
        const { keyName, index, Component } = propsConnect
        const [hash, forceRender] = useForceRender()

        function setRegister() {
            const connection: Connection = {
                keyName,
                index,
                render: forceRender,
                props,
                hash
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

    function Wrapper(Component: () => JSX.Element) {
        propsConnect.Component = Component
        return WrappedComponent
    }

    function connect(keyName: string, index?: string | number) {
        propsConnect.keyName = keyName
        propsConnect.index = index
        return Wrapper
    }

    return connect
}
