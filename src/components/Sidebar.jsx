import { useContext } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import LayoutContext from "../contexts/layout-context";

export default function Sidebar() {
  const pathname = useLocation().pathname;
  const { isOpenSidebar } = useContext(LayoutContext);

  return (
    <main>
      <aside
        className="sidebar"
        style={{
          left: isOpenSidebar ? "0%" : "-100%",
        }}
      >
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
    </main>
  );
}
