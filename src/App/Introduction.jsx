import LineCode from "../components/LineCode";
import conceptSrc from "../images/concept.jpg";

export default function Introduction() {
  return (
    <div className="introduction">
      <h2>Introduction</h2>
      <div>
        <img
          className="badge"
          src="https://packagephobia.com/badge?p=redity"
          alt=""
          width="20"
        />
        <img
          className="badge"
          src="https://packagequality.com/shield/redity.svg"
          alt=""
          width="20"
        />
      </div>
      <p>
        <b>Redity</b> is a library for render control. Intended to have states
        outside the component tree.
      </p>
      <img src={conceptSrc} alt="concept" />
      <p>
        States and handles are global and allow you to be within reach of any
        component.
      </p>
      <h3>Installation</h3>
      <LineCode>npm install redity</LineCode>
      <h3>Support</h3>
      <ul>
        <li>
          React versión <b>^16.8.0</b>
        </li>
        <li>Typescript</li>
      </ul>
    </div>
  );
}
