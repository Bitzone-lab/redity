import { render, useRender } from "../redity";

const state = {
  count: 0,
};

function App() {
  useRender("App");

  function clickHandler() {
    state.count++;
    render("App");
  }

  return (
    <div className="app">
      <h1>Welcome Redity</h1>
      <p>
        Number: <b>{state.count}</b>
      </p>
      <button onClick={clickHandler}>Count</button>
    </div>
  );
}

export default App;
