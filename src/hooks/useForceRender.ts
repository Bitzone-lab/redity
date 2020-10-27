import { useState } from 'react'
import createHash from '../utils/createHash'

export default function useForceRender(): [string, () => void] {
    const [hash, setHash] = useState(createHash())

    function forceRender() {
        setHash(createHash())
    }

    return [hash, forceRender]
}
