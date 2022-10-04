import LineCode from "../components/LineCode";
import Syntax from "../components/Syntax";
import { renders, useRender } from "../redity";

const codeStates = `const state = {
  counter: 0,
};`;

const codeHandlers = `
function clickHandler() {
  state.counter++;
  renders("Group");
}`;

const codeAction = `function Action() {
  return (
    <div className="box">
      <p>Action</p>
      <button onClick={clickHandler}>Count Group</button>
    </div>
  );
}`;

const codeComponent1 = `function Component1() {
  useRender("Group", 1);
  return (
    <div className="box">
      <p>Component 1</p>
      <p>
        <b>Counter: {state.counter}</b>
      </p>
    </div>
  );
}`;

const codeComponent2 = `function Component2() {
  useRender("Group", 2);
  return (
    <div className="box">
      <p>Component 2</p>
      <p>
        <b>Counter: {state.counter}</b>
      </p>
    </div>
  );
}`;

const codeOmit = `renders("Group", [1]);`;

const state = {
  counter: 0,
};

function clickHandler() {
  state.counter++;
  renders("Group");
}

function Component1() {
  useRender("Group", 1);
  return (
    <div className="box">
      <p>Component 1</p>
      <p>
        <b>Counter: {state.counter}</b>
      </p>
    </div>
  );
}

function Component2() {
  useRender("Group", 2);
  return (
    <div className="box">
      <p>Component 2</p>
      <p>
        <b>Counter: {state.counter}</b>
      </p>
    </div>
  );
}

function Action() {
  return (
    <div className="box">
      <p>Action</p>
      <button onClick={clickHandler}>Count Group</button>
    </div>
  );
}

export default function Groups() {
  return (
    <div>
      <h2>Groups</h2>
      <p>
        It can be overwhelming to think about creating multiple keyNames. You
        can create groups of components by keyName.
      </p>
      <ul>
        <li>
          <b>renders</b>. Render a group of components by keyName.
          <LineCode>{`declare const renders: (keyName: string, omits?: (string | number)[]) => void;`}</LineCode>
        </li>
      </ul>
      <p>
        Each component must be registered with the <b>keyName of the group</b>{" "}
        to which they are to remain and a unique index.
      </p>
      <hr />
      <h3>states.js</h3>
      <Syntax code={codeStates} />
      <h3>handles.js</h3>
      <Syntax code={codeHandlers} />
      <h3>Action.jsx</h3>
      <Action />
      <Syntax code={codeAction} />
      <h3>Component1.jsx</h3>
      <Component1 />
      <Syntax code={codeComponent1} />
      <h3>Component2.jsx</h3>
      <Component2 />
      <Syntax code={codeComponent2} />
      <hr />
      <p>You can omit some components of the group, indicating their index.</p>
      <Syntax code={codeOmit} />
    </div>
  );
}
