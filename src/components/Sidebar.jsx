import { NavLink, Outlet, useLocation } from "react-router-dom";

export default function Sidebar() {
  const pathname = useLocation().pathname;

  return (
    <>
      <aside className="sidebar">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive && pathname === "/" ? "active" : ""
              }
            >
              Introduction
            </NavLink>
          </li>
          <li>
            <NavLink to="/started">Started</NavLink>
          </li>
          <li>
            <NavLink to="/rendering">Rendering</NavLink>
          </li>
          <li>
            <NavLink to="/groups">Groups</NavLink>
          </li>
        </ul>
      </aside>
      <section>
        <Outlet />
      </section>
    </>
  );
}
