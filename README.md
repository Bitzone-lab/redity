# Redity

[![npm version](https://badge.fury.io/js/redity.svg)](https://badge.fury.io/js/redity) [![install size](https://packagephobia.com/badge?p=redity)](https://packagephobia.com/result?p=redity)

Redity Is a library for render control. Intended to have states outside the component tree.

```
npm install redity
```

Read the documentation [here](https://bitzone-lab.github.io/redity/#/).

```js
// controller.js
import { render } from "redity";

export const KEYNAME = "MY_KEYNAME";
export const store = {
  message: "",
};

export function handleClick() {
  store.message = "Welcome to Redity!";
  render(KEYNAME);
}
```

```js
import { useRender } from "redity";
import { store, handleClick, KEYNAME } from "./controller";

export default function MyComponent() {
  useRender(KEYNAME);
  return (
    <div>
      <p>{store.message}</p>
      <button onClick={handleClick}>Click me! :D</button>
    </div>
  );
}
```

> Requirements: react@^16.8.0
