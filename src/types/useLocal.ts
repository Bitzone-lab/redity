import { useState } from 'react'
import createHash from '../utils/createHash'

/**
 * It only returns a function to render the current component
 * @returns Return a method to generate a render
 */
export default function useLocal() {
    const [, setHash] = useState(createHash())

    /**
     * Render this component
     */
    function render() {
        setHash(createHash())
    }

    return render
}
