import store from './store'
import useLocal from './types/useLocal'
import createConnect from './types/createConnect'
import createCapsule from './types/createCapsule'
import createUseRender from './types/createUseRender'
import renderingTypes from './rendering_types'
import { PropsCapsule } from './typing'
export * from './typing'

const { registers } = store()
const Capsule: (props: PropsCapsule) => JSX.Element = createCapsule(registers)
/**
 * @deprecated use useRender or Capsule
 */
const connect = createConnect(registers)
const useRender = createUseRender(registers)

const { render, renders } = renderingTypes(registers)

/**
 * Returns the number of registered components but only those that are displayed.
 */
function size(): number {
    return registers.size
}

export { connect, Capsule, useRender, render, renders, useLocal, size }
