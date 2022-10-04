import { useRender } from "../redity";
import Syntax from "../components/Syntax";

const codeString = `import { useRender } from "redity";

const state = {
  counter: 0,
};

export default function Counter() {
  const localRender = useRender();

  function clickHandler() {
    state.counter++;
    localRender();
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
  const localRender = useRender();

  function clickHandler() {
    state.counter++;
    localRender();
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
      <p>
        <b>useRender</b> returns a method for local rendering.
      </p>
    </div>
  );
}
