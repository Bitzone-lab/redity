import createCapsule from './types/createCapsule'
import createUseRender from './types/createUseRender'
import renderingTypes from './rendering_types'
import { PropsCapsule, Registered } from './typing'
export * from './typing'

const registers: Map<string, Registered> = new Map()
const Capsule: (props: PropsCapsule) => JSX.Element = createCapsule(registers)
const useRender = createUseRender(registers)

const { render, renders } = renderingTypes(registers)

export { Capsule, useRender, render, renders }
