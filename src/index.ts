import store from './store'
import types from './types'
import renderingTypes from './rendering_types'

const { registers } = store()
const { connect, Capsule, useRender, useLocal } = types(registers)
const { render, renders } = renderingTypes(registers)

export default function Redity() {}
Redity.connect = connect
Redity.Capsule = Capsule
Redity.useRender = useRender
Redity.render = render
Redity.renders = renders
Redity.useLocal = useLocal
/**
 * Returns the number of registered components but only those that are displayed.
 */
Redity.size = function (): number {
    return registers.size
}
Redity.version = '1.0.0-alpha.2'

export { connect, Capsule, useRender, render, renders, useLocal }
