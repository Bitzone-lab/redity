import { useRender } from "../redity";
import LineCode from "../components/LineCode";
import Syntax from "../components/Syntax";

const codeString = `import { useRender } from "redity";

const state = {
  counter: 0,
};

export default function Counter() {
  const render = useRender();

  function clickHandler() {
    state.counter++;
    render();
  }

  return (
    <div className="box">
      <p>Counter: {state.counter}</p>
      <button onClick={clickHandler}>Count</button>
    </div>
  )
}`;

const state = {
  counter: 0,
};

export default function Started() {
  const render = useRender();

  function clickHandler() {
    state.counter++;
    render();
  }

  return (
    <div>
      <h2>Started</h2>
      <p>
        <b>Redity</b> is a library for render control. Intended to have states
        outside the component tree.
      </p>
      <h3>Installation</h3>
      <LineCode>npm install redity</LineCode>

      <h3>Example</h3>
      <p>This would be an example of a simple counter.</p>
      <div className="box">
        <p>Counter: {state.counter}</p>
        <button onClick={clickHandler}>Count</button>
      </div>
      <Syntax code={codeString} />
    </div>
  );
}
