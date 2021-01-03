import { Hook, Connection, Encapsulation } from '../store'

export default function tools(registers: Map<string, Hook | Connection | Encapsulation>) {
  /**
   * Returns the props received per connection by the parent component
   * @param keyName KeyName of connection
   * @returns props
   */
  function getProps<T = {}>(keyName: string): T | null {
    const register: Hook | Connection<T> | Encapsulation | {} = registers.get(keyName) || {}

    function instanceOfConnection(object: Hook | Connection<T> | Encapsulation | {}): object is Connection<T> {
      return 'props' in object;
    }

    if(instanceOfConnection(register)){
      return register.props
    }
    return null
  }

  return {
    getProps
  }
}
