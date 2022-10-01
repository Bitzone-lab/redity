import { useRender } from "../redity";
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
        This would be an example of a simple <b>local render</b> counter.
      </p>
      <div className="box">
        <p>Counter: {state.counter}</p>
        <button onClick={clickHandler}>Count</button>
      </div>
      <Syntax code={codeString} />
    </div>
  );
}
