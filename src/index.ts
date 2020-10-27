import store from './store'
import types from './types'
import getRenderTools from './getRenderTools'

const { registers } = store()

const { connect, Capsule, useRender } = types(registers)

const { render, asyncRender } = getRenderTools(registers)

export { connect, Capsule, useRender, render, asyncRender }
