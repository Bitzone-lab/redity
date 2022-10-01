import Syntax from "../components/Syntax";
import { render, useRender } from "../redity";

const codeString = `import { useRender, render } from "redity";

const state = {
  counter: 0,
};

function clickHandler() {
  state.counter++;
  // rendering component with this keyName
  render("Component_2");
}

function Component1() {
  return (
    <div className="box">
      <p>Component 1</p>
      <button onClick={clickHandler}>Count</button>
    </div>
  );
}

function Component2() {
  // Component registered
  useRender("Component_2");
  return (
    <div className="box">
      <p>Component 2</p>
      <p>
        <b>Counter: {state.counter}</b>
      </p>
    </div>
  );
}`;

const state = {
  counter: 0,
};

function clickHandler() {
  state.counter++;
  render("Component_2");
}

function Component1() {
  return (
    <div className="box">
      <p>Component 1</p>
      <button onClick={clickHandler}>Count</button>
    </div>
  );
}

function Component2() {
  useRender("Component_2");

  return (
    <div className="box">
      <p>Component 2</p>
      <p>
        <b>Counter: {state.counter}</b>
      </p>
    </div>
  );
}

export default function Rendering() {
  return (
    <div>
      <h2>Rendering</h2>
      <p>
        The components require to be registered to have control of the render of
        the same.
      </p>
      <ul>
        <li>
          <b>useRender</b> register component. When we want to take control of
          the render outside of the component, we need to register it with a{" "}
          <b>key</b>.
        </li>
        <li>
          <b>render</b>, is a method to generate a render by the keyName of the
          component.
        </li>
      </ul>
      <hr />
      <h3>Component 1</h3>
      <Component1 />
      <h3>Component 2</h3>
      <Component2 />
      <Syntax code={codeString} />
    </div>
  );
}
