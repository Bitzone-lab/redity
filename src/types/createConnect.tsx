import React, { useEffect } from 'react'
import { useForceRender } from '../hooks/useForceRenders'
import { Hook, Connection, Encapsulation } from '../store'
import { __keyNameIndex__ } from '../utils/tools'

type TypeComponent<T> = (props: React.PropsWithChildren<T>) => JSX.Element
export type Wrapped<T> = (props: React.PropsWithChildren<T>) => JSX.Element
type ConnectComponent<T> = (Component: TypeComponent<T>) => Wrapped<T>
/**
 * Register component for render by key name
 * @param keyName key name
 * @param index index
 */
export type Connect<T> = (keyName: string, index?: string|number) => ConnectComponent<T>

export default function createConnect(registers: Map<string, Hook | Connection | Encapsulation>) {
    /**
    * Register component for render by key name
    * @param keyName key name
    * @param index index
    */
    function connect(keyName: string, index?: string | number) {
        return function<T>(Component: TypeComponent<T>): Wrapped<T> {

            function WrappedComponent(props: React.PropsWithChildren<T>) {
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

            return WrappedComponent  
        }
    }

    return connect
}
