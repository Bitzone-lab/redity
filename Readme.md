Redity
========

Un generador de renders

```
npm install redity
```

## Render and Connect

`render` es un método que genera render a los componentes conectados. Para identificar un connect se requiere de una key. Las key deben ser únicas.

```js
// Controller/index.js

import { render } from 'redity'

export const my_states = {
  name: ''
}

export function handleClick() {
  my_states.name = 'Juan'
  render('my_key')
}
```

```js
// MyComponent.js
import React from 'react'
import { connect } from 'redity'
import { my_states, handleClick } from './Controller'

function MyComponent(){
  return (
    <div>
      <p>{ my_states.name }</p>
      <button onClick={handleClick} >Click me! :D</button>
    </div>
  )
}

export default connect('my_key')(MyComponent)
```

## Capsule

Es un componente que encapsula cierta sección del componente en donde se espera realizar un render. Una capsula requiere de una `key`


```js
import React from 'react'
import { Capsule } from 'redity'
import { my_states, handleClick } from './Controller'

export default function MyComponent(){
  return (
    <div>
      <Capsule keyName='my_key'>
        {
          () => (
            <p>{ my_states.name }</p>
            <button onClick={handleClick} >Click me! :D</button>
          )
        }      
      </Capsule>
    </div>
  )
}
```

Es otra opción en vez de connect.


## getProps

Es una función que retorna los props pasados por el componente conectado. Requiere de la key del componente conectado.

```js
<MyComponent my_prop='prop'>
```
```js
// Controller/index.js
import { getProps } from 'redity'


function getPropsOfMyComponent () {
  getProps('my_key')
}
```

> Tenga en claro que solo funciona para los componentes conectados (`connect`) y encapsulado (`capsule`).
