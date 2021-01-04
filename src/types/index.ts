import createCapsule, { TypeCapsule } from "./createCapsule";
import { Hook, Connection, Encapsulation } from '../store'
import createConnect, { Connect } from "./createConnect";
import createUseRender, { UseRender } from "./createUseRender";
import useLocal from './useLocal'
import tools, { Tools, GetProps } from './tools'

export default function types (registers: Map<string, Hook | Connection | Encapsulation>) {
  const Capsule: TypeCapsule = createCapsule(registers)
/**
 * Register component for render by key name
 * @param keyName key name
 * @param index index
 */
  const connect: Connect = createConnect(registers)
  const useRender: UseRender = createUseRender(registers)
  const _tools: Tools = tools(registers)
  const getProps: GetProps = _tools.getProps

  return {
    useRender,
    connect,
    Capsule,
    useLocal,
    getProps
  }
}
