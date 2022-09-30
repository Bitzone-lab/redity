import { useRender } from "./redity";

const state = {
  count: 0,
};

function App() {
  const render = useRender();

  function clickHandler() {
    state.count++;
    render();
  }

  return (
    <div className="App">
      <h1>Welcome Redity</h1>
      <p>
        Number: <b>{state.count}</b>
      </p>
      <button onClick={clickHandler}>Count</button>
    </div>
  );
}

export default App;
