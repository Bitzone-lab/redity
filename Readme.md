Redity
========
[![install size](https://packagephobia.com/badge?p=redity)](https://packagephobia.com/result?p=redity)

Render generator.
```
npm install redity
```

#### Requirements
* react: "^16.8.0",

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
import { useRender } from 'redity'
import { store, handleClick, KEYNAME } from './Controller'

export default function MyComponent(){
  useRender(KEYNAME)
  return (
    <div>
      <p>{ store.message }</p>
      <button onClick={handleClick} >Click me! :D</button>
    </div>
  )
}
```

## Register Components

There are two ways to register a component:
* [capsule](#Capsule)
* [useRender](#useRender)

### [Capsule](#Capsule)

`Capsule` will only record the section that is encapsulated.
```js
import { Capsule } from 'redity'

export default function MyComponent(){
    return (
      <div>
        <Capsule keyName='my_key'>
          {() => <div>...<div/>}
        </Capsule>
      </div>
    )
}
```
You can send props to the children component.

```jsx
function Children(props){
    return (<div>{props.name}</div>)
}
```
```jsx
<Capsule keyName='my_key' props={{ name: 'Pacheco' }} >
  {Children}
</Capsule>
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

## Render
When a component is registered and it is deployed it is possible to generate a render. In order to generate a render you need to identify its KeyName.

```js
import { render } from 'redity'
render('my_key') // true
// or more
render(['my_key', 'my_key2']) // true
```

## Index
Indexes are a way to subclass component subscriptions.
All types of subscriptions have as a second parameter adding the index.

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

You can skip some indexes 
```js
import { renders } from 'redity'
renders('Parent', ['children_2']) // 1
```
## Consider

* If there are two components registered only by the same keyName, it will only be possible to render one. As a solution use the index.
* Use constants for your KeyNames and Indexs.
* Use `Capsule` for small sections of the component and separate indeces. For example in rows of a table.

## Log
* `connect` is deprecated, use `useRender` or `Capsule`
* `getProps` removed
* `useLocal` is deprecated, use `useRender`
