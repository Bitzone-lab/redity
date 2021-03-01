import store from './store'
import useLocal from './types/useLocal'
import createConnect from './types/createConnect'
import createCapsule from './types/createCapsule'
import createUseRender from './types/createUseRender'
import renderingTypes from './rendering_types'
export * from './typing'

const { registers } = store()
const Capsule = createCapsule(registers)
/**
 * @deprecated use useRender or Capsule
 */
const connect = createConnect(registers)
const useRender = createUseRender(registers)

const rendersTypes = renderingTypes(registers)
const render = rendersTypes.render
const renders = rendersTypes.renders

/**
 * Returns the number of registered components but only those that are displayed.
 */
function size(): number {
    return registers.size
}

export { connect, Capsule, useRender, render, renders, useLocal, size }
