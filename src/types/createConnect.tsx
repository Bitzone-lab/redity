import React, { useEffect, useState } from 'react'
import { Wrapped, TypeComponent, Registered } from '../typing'
import createHash from '../utils/createHash'
import setRegister from '../utils/setRegister'
import { __keyNameIndex__ } from '../utils/tools'

export default function createConnect(registers: Map<string, Registered>) {
    function connect(keyName: string, index?: string | number) {
        return function<T>(Component: TypeComponent<T>): Wrapped<T> {
            function WrappedComponent(props: React.PropsWithChildren<T>) {
                const [, setHash] = useState(createHash())
      
     
                function deleteRegister() {
                    registers.delete(__keyNameIndex__(keyName, index))
                }
      
                useEffect(() => {
                    setRegister(registers, { keyName, index }, setHash)
                    return () => {
                        deleteRegister()
                    }
                }, [])

                setRegister(registers, { keyName, index }, setHash)
                return <Component {...props} />
            }

            return WrappedComponent  
        }
    }

    return connect
}
