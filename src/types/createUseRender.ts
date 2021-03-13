import { useEffect, useState } from 'react'
import { Registered } from '../typing'
import createHash from '../utils/createHash'
import setRegister from '../utils/setRegister'
import { __keyNameIndex__ } from '../utils/tools'

export default function createUseRender(registers: Map<string, Registered>) {
    function useRender(keyName?: string, index?: number | string): () => void { 
        const [, setHash] = useState(createHash())

        useEffect(() => {
            if(keyName !== undefined){
                setRegister(registers, { keyName, index }, setHash)
            }
            return () => {
                if(keyName !== undefined){
                    registers.delete(__keyNameIndex__(keyName, index))
                }
            }
        }, [])

        if(keyName !== undefined){
            setRegister(registers, { keyName, index }, setHash)
        }

        return function () {
            setHash(createHash)
        }
    }

    return useRender
}
