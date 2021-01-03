Redity
========

Render generator.

```
npm install redity
```

#### Requirements
* react: "^16.8.0",
* react-dom: "^16.8.0"

## Starting

The concept of Redity is to be able to generate renders from outside by its keyName to the registered components. The advantage comes when you want to take the logic out of the component and have a store that can be distributed to any component.

Manage the renders to the necessary components. This will lead to a better performance.

```js
// Controller/index.js
import { render } from 'redity'

const KEYNAME = 'MY_KEYNAME'

export const store = {
  message: ''
}

export function handleClick() {
  store.message = 'Welcome to Redity! 😄'
  render(KEYNAME)
}
```

```js
// MyComponent.js
import React from 'react'
import { connect } from 'redity'
import { store, handleClick, KEYNAME } from './Controller'

function MyComponent(){
  return (
    <div>
      <p>{ store.message }</p>
      <button onClick={handleClick} >Click me! :D</button>
    </div>
  )
}

export default connect(KEYNAME)(MyComponent)
```

## Register Components

There are three ways to register a component:
* [connect](#Connect)
* [capsule](#Capsule)
* [useRender](#useRender)

### [Connect](#Connect)

```js
import { connect } from 'redity'

/** ... */

export default connect('my_key')(Component)
```

### [Capsule](#Capsule)

`Capsule` will only record the section that is encapsulated.
```js
import { Capsule } from 'redity'

export default function MyComponent(){
    return (
      <div>
        <Capsule keyName='my_key'>
          <div>...</div>
        </Capsule>
      </div>
    )
}
```

### [useRender](#useRender)

```js
import { useRender } from 'redity'

export default function MyComponent(){
    useRender('my_key')

    return (
      <div>
          <div>...</div>
      </div>
    )
}
```

`All records are unique`. Each record requires a keyname to identify when you want to generate a render.

## useLocal

it's just a useState to generate a forced render on the current component.
```js
import { useLocal } from 'redity'

export default function MyComponent(){
    const render = useLocal()
    function handleClick(){
        render()
    }
    return (
      <div>
          <div onClick={handleClick} >...</div>
      </div>
    )
}
```

## Render
When a component is registered and it is deployed it is possible to generate a render. In order to generate a render you need to identify its KeyName.

```js
import { render } from 'redity'
render('my_key') // true
```

## Index
Indexes are a way to subclass component subscriptions.
All types of subscriptions have as a second parameter adding the index.

```js
export default connect('my_key', 1)(Component)
```
```js
<Capsule keyName="my_key" index={1}>
 ...
</Capsule>
```
```js
useRender('my_key', 1)
```
To generate a render pass it the keyName and index.

```js
import { render } from 'redity'
render('my_key', 1)
```

## Renders
With the indices we can generate rendering groups in parallel.

Keep in mind that it will generate render only those that are registered by their index. Thanks to this you only need to pass the keyName.
```js
function Children1(){
    useRender('Parent', 'children_1')
    return <p>Children 1</p>
}

function Children2(){
    useRender('Parent', 'children_2')
    return <p>Children 2</p>
}

function Parent (){
    useRender('Parent')
    return (
        <div>
            <Children1 />
            <Children2 />
        </div>
    )
}
```

```js
import { renders } from 'redity'
renders('Parent') // 2
```
Renders will return the sum of the generated renders. One render for each child component.
## getProps

getProp, when you want to get the props from a parent component. This will only be possible for components registered by [connect](#Connect).

```js
function MyComponent({ name }){/*...*/}

export default connect(KEY_NAME)(MyComponent)
```
```js
function ParentComponent(){
    return (
        <div>
            <MyComponent name='Seba'>
        </div>
    )
}
```
```js
import { getProps } from 'redity'
getProps(KEY_NAME) // { name: 'Seba' }
```

## Consider

* If there are two components registered only by the same keyName, it will only be possible to render one. As a solution use the index.
* Use constants for your KeyNames.
* If you want to know the number of records use `Redity.size()`.
* Use `Capsule` for small sections of the component and separate indeces. For example in rows of a table.
* Use `connect` only when you want to get the prop sent by the parent component by the getProps method.
