import store from './store'
import types from './types'
import renderingTypes, {
    RendersTypes,
    Render as RenderFun,
    Renders as RendersFun
} from './rendering_types'
import * as TypesConnect from './types/createConnect'

const { registers } = store()
const { connect, Capsule, useRender, useLocal, getProps } = types(registers)
const rendersTypes: RendersTypes = renderingTypes(registers)
const render: RenderFun = rendersTypes.render
const renders: RendersFun = rendersTypes.renders

export type Wrapped<T> = TypesConnect.Wrapped<T>
export type Render = RenderFun
export type Rendes = RendersFun
export default function Redity() {}
Redity.connect = connect
Redity.Capsule = Capsule
Redity.useRender = useRender
Redity.render = render
Redity.renders = renders
Redity.useLocal = useLocal
Redity.getProps = getProps
/**
 * Returns the number of registered components but only those that are displayed.
 */
Redity.size = function (): number {
    return registers.size
}
/**
 * Redity version
 */
Redity.version = '1.0.0-alpha.3.1'

export { connect, Capsule, useRender, render, renders, useLocal, getProps }
