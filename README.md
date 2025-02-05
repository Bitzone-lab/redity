# Redity

[![npm version](https://badge.fury.io/js/redity.svg)](https://badge.fury.io/js/redity) [![install size](https://packagephobia.com/badge?p=redity)](https://packagephobia.com/result?p=redity)

Manage renders.

```
npm install redity
```

Read the documentation [here](https://bitzone-lab.github.io/redity/#/).

```js
import { useRender, render } from "redity";
export const KEYNAME = "MY_KEYNAME";
export const store = {
  message: "",
};
// outside function
function handleClick() {
  store.message = "Welcome to Redity!";
  render(KEYNAME);
}

export default function Component() {
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
