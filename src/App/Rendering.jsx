import LineCode from "../components/LineCode";
import Syntax from "../components/Syntax";
import { render, useRender } from "../redity";

const codeStates = `const state = {
  counter1: 0,
  counter2: 0,
};`;

const codeHandlers = `function clickHandler1() {
  state.counter1++;
  render("Component_1");
}

function clickHandler2() {
  state.counter2++;
  render("Component_2");
}
`;

const codeComponent1 = `function Component1() {
  useRender("Component_1");

  return (
    <div className="box">
      <p>Component 1</p>
      <p>
        <b>Counter: {state.counter1}</b>
      </p>
      <button onClick={clickHandler1}>Count Component 1</button>
      <button onClick={clickHandler2}>Count Component 2</button>
    </div>
  );
}`;

const codeComponent2 = `function Component2() {
  useRender("Component_2");

  return (
    <div className="box">
      <p>Component 2</p>
      <p>
        <b>Counter: {state.counter2}</b>
      </p>
      <button onClick={clickHandler1}>Count Component 1</button>
      <button onClick={clickHandler2}>Count Component 2</button>
    </div>
  );
}`;

const state = {
  counter1: 0,
  counter2: 0,
};

function clickHandler1() {
  state.counter1++;
  render("Component_1");
}

function clickHandler2() {
  state.counter2++;
  render("Component_2");
}

function Component1() {
  useRender("Component_1");
  return (
    <div className="box">
      <p>Component 1</p>
      <p>
        <b>Counter: {state.counter1}</b>
      </p>
      <button onClick={clickHandler1}>Count Component 1</button>
      <button onClick={clickHandler2}>Count Component 2</button>
    </div>
  );
}

function Component2() {
  useRender("Component_2");

  return (
    <div className="box">
      <p>Component 2</p>
      <p>
        <b>Counter: {state.counter2}</b>
      </p>
      <button onClick={clickHandler1}>Count Component 1</button>
      <button onClick={clickHandler2}>Count Component 2</button>
    </div>
  );
}

export default function Rendering() {
  return (
    <div>
      <h2>Rendering</h2>
      <p>
        Redity requires registering components in order to control their
        rendering.
      </p>
      <p>
        Components must be registered by an identifier (keyName). If it is not
        assigned it will only be for local rendering.
      </p>
      <p>
        The <b>keyName</b> is unique.
      </p>
      <ul>
        <li>
          <b>useRender</b>, register component.
          <LineCode>{`declare const useRender: (
    keyName?: string,
    index?: string | number
  ) => () => void;`}</LineCode>
        </li>
        <li>
          <b>render</b>, render a component by keyName.
          <LineCode>{`declare const render: (
    keyName: string | string[],
    index?: string | number
  ) => void;`}</LineCode>
        </li>
      </ul>
      <hr />
      <h3>states.js</h3>
      <Syntax code={codeStates} />
      <h3>handles.js</h3>
      <Syntax code={codeHandlers} />
      <h3>Component1.jsx</h3>
      <Component1 />
      <Syntax code={codeComponent1} />
      <h3>Component2.jsx</h3>
      <Component2 />
      <Syntax code={codeComponent2} />
    </div>
  );
}
