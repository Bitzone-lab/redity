import createCapsule from "./createCapsule";
import { Hook, Connection, Encapsulation } from '../store'
import createConnect from "./createConnect";
import createUseRender from "./createUseRender";
import useLocal from './useLocal'
import tools from './tools'

export default function types (registers: Map<string, Hook | Connection | Encapsulation>) {
  const Capsule = createCapsule(registers)
  const connect = createConnect(registers)
  const useRender = createUseRender(registers)
  const { getProps } = tools(registers)

  return {
    useRender,
    connect,
    Capsule,
    useLocal,
    getProps
  }
}
