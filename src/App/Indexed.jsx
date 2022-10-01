import { renders, useRender } from "../redity";

const state = {
  group1Counter: 0,
  group2Counter: 0,
};

function clickHandler() {
  state.group1Counter++;
  renders("Group");
}

function clickHandler2() {
  state.group2Counter++;
  renders("Group2");
}

function GroupComponent1() {
  useRender("Group", 1);
  return (
    <div className="box">
      <p>Component 1</p>
      <p>
        <b>Counter: {state.group1Counter}</b>
      </p>
      <button onClick={clickHandler}>Count Group 1</button>
      <button onClick={clickHandler2}>Count Group 2</button>
    </div>
  );
}

function GroupComponent2() {
  useRender("Group", 2);

  return (
    <div className="box">
      <p>Component 2</p>
      <p>
        <b>Counter: {state.group1Counter}</b>
      </p>
    </div>
  );
}

function Group2Component1() {
  useRender("Group2", 1);
  return (
    <div className="box">
      <p>Group Component 1</p>
      <p>
        <b>Counter: {state.group2Counter}</b>
      </p>
      <button onClick={clickHandler}>Count Group 1</button>
      <button onClick={clickHandler2}>Count Group 2</button>
    </div>
  );
}

function Group2Component2() {
  useRender("Group2", 2);

  return (
    <div className="box">
      <p>Group Component 2</p>
      <p>
        <b>Counter: {state.group2Counter}</b>
      </p>
    </div>
  );
}

function Group() {
  useRender("Group");

  return (
    <div className="box">
      <p>Grupo 1</p>
      <GroupComponent1 />
      <GroupComponent2 />
    </div>
  );
}

function Group2() {
  useRender("Group2");

  return (
    <div className="box">
      <p>Grupo 2</p>
      <Group2Component1 />
      <Group2Component2 />
    </div>
  );
}

export default function Indexed() {
  return (
    <div>
      <h2>Indexed</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
        provident voluptas inventore laborum, ad debitis eos recusandae facilis
        odit ducimus, nostrum mollitia tempora doloremque? Temporibus ullam sit
        sequi alias dolorem.
      </p>
      <Group />
      <Group2 />
    </div>
  );
}
